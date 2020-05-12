import React, {useEffect, useState} from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {useDispatch, useSelector} from 'react-redux';
import {useLocation} from 'react-router-dom';
import {
  onDeleteContacts,
  onGetContactList,
  onUpdateStarredStatus,
} from '../../../../redux/actions/ContactApp';
import ContactHeader from './ContactHeader';
import ConfirmationDialog from '../../../../@crema/core/ConfirmationDialog';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import EmptyResult from '../../../../@crema/core/EmptyResult';
import CreateContact from '../CreateContact';
import {Hidden} from '@material-ui/core';
import ContactViewContent from './ContactViewContent';
import ContactDetail from '../ContactDetail';
import AppsPagination from '../../../../@crema/core/AppsPagination';
import {makeStyles} from '@material-ui/core/styles';
import {grey} from '@material-ui/core/colors';

const ContactListing = props => {
  const dispatch = useDispatch();
  const {pathname} = useLocation();

  const contactList = useSelector(({contactApp}) => contactApp.contactList);

  const totalContacts = useSelector(({contactApp}) => contactApp.totalContacts);

  const [filterText, onSetFilterText] = useState('');

  const [page, setPage] = useState(0);

  const [pageView, setPageView] = useState('list');

  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const [checkedContacts, setCheckedContacts] = useState([]);

  const [toDeleteContacts, setToDeleteContacts] = useState([]);

  const [isAddContact, onSetIsAddContact] = useState(false);

  const [isShowDetail, onShowDetail] = useState(false);

  const [selectedContact, setSelectedContact] = useState(null);

  const loading = useSelector(({common}) => common.loading);

  useEffect(() => {
    setPage(0);
  }, [pathname]);

  useEffect(() => {
    const path = pathname.split('/');
    dispatch(
      onGetContactList(path[path.length - 2], path[path.length - 1], page),
    );
  }, [pathname, pageView, page, dispatch]);

  const isShowEmptyListMessage = () => {
    return filterText === '' && contactList.length === 0 && !loading;
  };

  const handleAddContactOpen = () => {
    onSetIsAddContact(true);
  };

  const handleAddContactClose = () => {
    onSetIsAddContact(false);
  };

  const onViewContactDetail = contact => {
    setSelectedContact(contact);
    onShowDetail(true);
  };

  const onOpenEditContact = contact => {
    setSelectedContact(contact);
    handleAddContactOpen();
  };

  const onPageChange = (event, value) => {
    setPage(value);
  };

  const onChangePageView = view => {
    setPageView(view);
  };

  const onChangeCheckedContacts = (event, id) => {
    if (event.target.checked) {
      setCheckedContacts(checkedContacts.concat(id));
    } else {
      setCheckedContacts(checkedContacts.filter(contactId => contactId !== id));
    }
  };

  const onChangeStarred = (status, contact) => {
    const selectedIdList = [contact.id];
    const path = pathname.split('/');
    dispatch(
      onUpdateStarredStatus(selectedIdList, status, path[path.length - 1]),
    );
  };

  const onUpdateContact = contact => {
    setSelectedContact(contact);
    handleAddContactClose();
  };

  const onGetFilteredItems = () => {
    if (filterText === '') {
      return contactList;
    } else {
      return contactList.filter(contact =>
        contact.name.toUpperCase().includes(filterText.toUpperCase()),
      );
    }
  };

  const onDeleteSelectedContacts = () => {
    const path = pathname.split('/');
    dispatch(
      onDeleteContacts(
        path[path.length - 2],
        path[path.length - 1],
        toDeleteContacts,
        page,
      ),
    );
    setDeleteDialogOpen(false);
    setCheckedContacts([]);
  };

  const onSelectContactsForDelete = contactIds => {
    setToDeleteContacts(contactIds);
    setDeleteDialogOpen(true);
  };

  const list = onGetFilteredItems();

  const useStyles = makeStyles(theme => ({
    appsPaginationRoot: {
      borderTop: `1px solid ${grey[300]}`,
      paddingRight: 8,
      paddingLeft: 8,
    },
  }));

  const classes = useStyles(props);

  return (
    <>
      <ContactHeader
        checkedContacts={checkedContacts}
        setCheckedContacts={setCheckedContacts}
        filterText={filterText}
        onSelectContactsForDelete={onSelectContactsForDelete}
        onSetFilterText={onSetFilterText}
        onPageChange={onPageChange}
        page={page}
        onChangePageView={onChangePageView}
        pageView={pageView}
      />
      <PerfectScrollbar className='scroll-app'>
        {!isShowEmptyListMessage() ? (
          <ContactViewContent
            list={list}
            pageView={pageView}
            onChangeCheckedContacts={onChangeCheckedContacts}
            onChangeStarred={onChangeStarred}
            checkedContacts={checkedContacts}
            onSelectContactsForDelete={onSelectContactsForDelete}
            onViewContactDetail={onViewContactDetail}
            onOpenEditContact={onOpenEditContact}
          />
        ) : (
          <EmptyResult
            actionTitle={<IntlMessages id='contactApp.createContact' />}
            onAction={handleAddContactOpen}
          />
        )}
      </PerfectScrollbar>

      <Hidden smUp>
        {contactList.length > 0 ? (
          <AppsPagination
            className={classes.appsPaginationRoot}
            count={totalContacts}
            page={page}
            onPageChange={onPageChange}
          />
        ) : null}
      </Hidden>

      {isAddContact ? (
        <CreateContact
          isAddContact={isAddContact}
          handleAddContactClose={handleAddContactClose}
          selectContact={selectedContact}
          onUpdateContact={onUpdateContact}
        />
      ) : null}

      {isShowDetail ? (
        <ContactDetail
          selectedContact={selectedContact}
          isShowDetail={isShowDetail}
          onShowDetail={onShowDetail}
          onSelectContactsForDelete={onSelectContactsForDelete}
          onOpenEditContact={onOpenEditContact}
        />
      ) : null}

      {isDeleteDialogOpen ? (
        <ConfirmationDialog
          open={isDeleteDialogOpen}
          onDeny={setDeleteDialogOpen}
          onConfirm={onDeleteSelectedContacts}
          title={<IntlMessages id='contactApp.deleteContact' />}
          dialogTitle={<IntlMessages id='common.deleteItem' />}
        />
      ) : null}
    </>
  );
};

export default ContactListing;

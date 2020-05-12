import List from '@material-ui/core/List';
import ContactListItem from './ContactListItem';
import Box from '@material-ui/core/Box';
import ContactGridItem from './ContactGridItem';
import React from 'react';
import {useSelector} from 'react-redux';
import GridContainer from '../../../../../@crema/core/GridContainer';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';

const ContactViewContent = props => {
  const {
    list,
    pageView,
    onChangeStarred,
    onChangeCheckedContacts,
    checkedContacts,
    onSelectContactsForDelete,
    onOpenEditContact,
    onViewContactDetail,
  } = props;
  const labelList = useSelector(({contactApp}) => contactApp.labelList);

  const useStyles = makeStyles(theme => ({
    paddingY: {
      paddingTop: 0,
      paddingBottom: 0,
    },
  }));

  const classes = useStyles();

  return (
    <>
      {pageView === 'list' ? (
        <List className={classes.paddingY}>
          {list.map(contact => {
            return (
              <ContactListItem
                key={contact.id}
                contact={contact}
                labelList={labelList}
                onChangeCheckedContacts={onChangeCheckedContacts}
                checkedContacts={checkedContacts}
                onSelectContactsForDelete={onSelectContactsForDelete}
                onChangeStarred={onChangeStarred}
                onViewContactDetail={onViewContactDetail}
                onOpenEditContact={onOpenEditContact}
              />
            );
          })}
        </List>
      ) : (
        <Box p={6}>
          <GridContainer>
            {list.map(contact => {
              return (
                <ContactGridItem
                  key={contact.id}
                  contact={contact}
                  labelList={labelList}
                  onChangeCheckedContacts={onChangeCheckedContacts}
                  checkedContacts={checkedContacts}
                  onChangeStarred={onChangeStarred}
                  onSelectContactsForDelete={onSelectContactsForDelete}
                  onViewContactDetail={onViewContactDetail}
                  onOpenEditContact={onOpenEditContact}
                />
              );
            })}
          </GridContainer>
        </Box>
      )}
    </>
  );
};

export default ContactViewContent;

ContactViewContent.defaultProps = {
  list: [],
  checkedContacts: [],
};

ContactViewContent.prototype = {
  list: PropTypes.array,
  pageView: PropTypes.string.isRequired,
  checkedContacts: PropTypes.array,
  onChangeCheckedContacts: PropTypes.func,
  onChangeStarred: PropTypes.func,
  onSelectContactsForDelete: PropTypes.func,
  onOpenEditContact: PropTypes.func,
  onViewContactDetail: PropTypes.func,
};

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import IntlMessages from '../../../../../@crema/utility/IntlMessages';
import Scrollbar from '../../../../../@crema/core/Scrollbar';
import CreateContact from '../../CreateContact';
import LabelItem from './LabelItem';
import AppsSideBarFolderItem from '../../../../../@crema/core/AppsSideBarFolderItem';
import {makeStyles} from '@material-ui/core/styles';
import {Fonts} from '../../../../../shared/constants/AppEnums';

const SideBarContent = props => {
  const labelList = useSelector(({contactApp}) => contactApp.labelList);

  const folderList = useSelector(({contactApp}) => contactApp.folderList);

  const [isAddContact, onSetIsAddContact] = useState(false);

  const handleAddContactOpen = () => {
    onSetIsAddContact(true);
  };

  const handleAddContactClose = () => {
    onSetIsAddContact(false);
  };

  const useStyles = makeStyles(theme => ({
    btnRoot: {
      width: '100%',
      height: '3rem',
      fontSize: 16,
      textTransform: 'capitalize',
      fontFamily: Fonts.MEDIUM,
      [theme.breakpoints.up('xl')]: {
        fontSize: 20,
        height: '3.5rem',
      },
    },
    listRoot: {
      marginBottom: 8,
      [theme.breakpoints.up('xl')]: {
        marginBottom: 20,
      },
    },
  }));

  const classes = useStyles(props);

  return (
    <>
      <Box
        px={{xs: 4, md: 5, lg: 6, xl: 8}}
        pt={{xs: 4, md: 5, lg: 6, xl: 8}}
        pb={{xs: 2, xl: 5}}>
        <Button
          variant='contained'
          color='secondary'
          className={classes.btnRoot}
          onClick={handleAddContactOpen}>
          <IntlMessages id='contactApp.createContact' />
        </Button>
      </Box>

      <Scrollbar className='scroll-app-sidebar'>
        <Box
          px={{xs: 4, md: 5, lg: 6, xl: 8}}
          pb={{xs: 4, md: 5, lg: 6, xl: 8}}
          pt={0}>
          <List
            className={classes.listRoot}
            component='nav'
            aria-label='main task folders'>
            {folderList.map(item => {
              return (
                <AppsSideBarFolderItem
                  key={item.id}
                  item={item}
                  path={`/apps/contact/folder/${item.alias}`}
                />
              );
            })}
          </List>

          <Box
            component='h5'
            mb={{xs: 1, xl: 3}}
            mt={{xs: 4, xl: 5}}
            fontFamily={Fonts.MEDIUM}>
            <IntlMessages id='common.labels' />
          </Box>

          <List component='nav' aria-label='main mailbox folders'>
            {labelList.map(label => (
              <LabelItem key={label.id} label={label} />
            ))}
          </List>

          {isAddContact ? (
            <CreateContact
              isAddContact={isAddContact}
              handleAddContactClose={handleAddContactClose}
            />
          ) : null}
        </Box>
      </Scrollbar>
    </>
  );
};

export default SideBarContent;

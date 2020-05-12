import React, {useState} from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import IntlMessages from '../../../../../@crema/utility/IntlMessages';
import Scrollbar from '../../../../../@crema/core/Scrollbar';
import {useSelector} from 'react-redux';
import ComposeMail from '../../ComposeMail';
import ConnectionListItem from './ConnectionListItem';
import AppsSideBarFolderItem from '../../../../../@crema/core/AppsSideBarFolderItem';
import LabelItem from './LabelItem';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import {Fonts} from '../../../../../shared/constants/AppEnums';

const SideBarContent = props => {
  const labelList = useSelector(({mailApp}) => mailApp.labelList);

  const connectionList = useSelector(({mailApp}) => mailApp.connectionList);

  const folderList = useSelector(({mailApp}) => mailApp.folderList);

  const [isComposeMail, setComposeMail] = useState(false);

  const onOpenComposeMail = () => {
    setComposeMail(true);
  };

  const onCloseComposeMail = () => {
    setComposeMail(false);
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
      {labelList && connectionList && folderList ? (
        <>
          <Box
            px={{xs: 4, md: 5, lg: 6, xl: 8}}
            pt={{xs: 4, md: 5, lg: 6, xl: 8}}
            pb={{xs: 2, xl: 5}}>
            <Button
              variant='contained'
              color='secondary'
              className={classes.btnRoot}
              onClick={onOpenComposeMail}>
              <IntlMessages id='common.compose' />
            </Button>
          </Box>

          <Scrollbar className={clsx(classes.scLauncher, 'scroll-app-sidebar')}>
            <Box
              px={{xs: 4, md: 5, lg: 6, xl: 8}}
              pb={{xs: 4, md: 5, lg: 6, xl: 8}}
              pt={0}>
              <List
                className={classes.listRoot}
                component='nav'
                aria-label='main mailbox folders'>
                {folderList.map(item => {
                  return (
                    <AppsSideBarFolderItem
                      key={item.id}
                      item={item}
                      classes={classes}
                      path={`/apps/mail/folder/${item.alias}`}
                    />
                  );
                })}
              </List>

              <Box
                component='h5'
                fontSize={16}
                mb={{xs: 1, xl: 3}}
                mt={{xs: 4, xl: 5}}
                fontFamily={Fonts.MEDIUM}>
                <IntlMessages id='common.labels' />
              </Box>

              <List
                className={classes.listRoot}
                component='nav'
                aria-label='main mailbox folders'>
                {labelList.map(label => {
                  return (
                    <LabelItem classes={classes} key={label.id} label={label} />
                  );
                })}
              </List>

              <Box
                component='h5'
                fontSize={16}
                mb={{xs: 1, xl: 3}}
                mt={{xs: 4, xl: 5}}
                fontFamily={Fonts.MEDIUM}>
                <IntlMessages id='common.connections' />
              </Box>

              <List>
                {connectionList.map(connection => {
                  return (
                    <ConnectionListItem
                      classes={classes}
                      connection={connection}
                      key={connection.id}
                    />
                  );
                })}
              </List>
            </Box>
          </Scrollbar>
        </>
      ) : null}

      {isComposeMail ? (
        <ComposeMail
          isComposeMail={isComposeMail}
          onCloseComposeMail={onCloseComposeMail}
        />
      ) : null}
    </>
  );
};

export default SideBarContent;

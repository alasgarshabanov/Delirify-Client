import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import PropTypes from 'prop-types';
import {Box, makeStyles} from '@material-ui/core';
import {Fonts} from '../../../../shared/constants/AppEnums';
import Scrollbar from '../../../../@crema/core/Scrollbar';

const NewsList = props => {
  const {newsData} = props;

  const useStyles = makeStyles(theme => ({
    newsImg: {
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '10rem',
      },
    },
    newsContent: {
      flex: '1 1 0',
    },
    listItem: {
      '&:last-child': {
        paddingBottom: 0,
      },
    },
  }));

  const classes = useStyles(props);

  return (
    <Scrollbar>
      <List>
        {newsData.map(news => {
          return (
            <Box
              key={news.id}
              px={0}
              pt={0}
              display='flex'
              flexDirection={{xs: 'column', sm: 'row'}}
              alignItems='flex-start'
              clone>
              <ListItem key={news.id} className={classes.listItem}>
                <ListItemText
                  className={classes.newsContent}
                  primary={
                    <Box
                      mb={1}
                      component='span'
                      display='flex'
                      alignItems='center'
                      fontSize={{xs: 16, xl: 18}}>
                      <Box color='grey.500'>{news.created}</Box>
                      <Box ml={2} color='primary.main'>
                        {news.by}
                      </Box>
                    </Box>
                  }
                  secondary={
                    <Box
                      component='span'
                      color='grey.700'
                      fontFamily={Fonts.MEDIUM}
                      fontSize={{xs: 14, sm: 16, xl: 18}}>
                      {news.news}
                    </Box>
                  }
                />
                <Box ml={{sm: 3, xl: 5}}>
                  <img
                    className={classes.newsImg}
                    src={news.image}
                    alt='bitcoin'
                  />
                </Box>
              </ListItem>
            </Box>
          );
        })}
      </List>
    </Scrollbar>
  );
};

export default NewsList;

NewsList.defaultProps = {
  newsData: [],
};

NewsList.propTypes = {
  newsData: PropTypes.array,
};

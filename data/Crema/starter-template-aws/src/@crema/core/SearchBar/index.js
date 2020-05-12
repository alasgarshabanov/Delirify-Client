import React from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import {Hidden, makeStyles} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';
import PropTypes from 'prop-types';
import {Fonts} from '../../../shared/constants/AppEnums';

const SearchBar = props => {
  const {value, onChange, borderLight, placeHolder} = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const useStyles = makeStyles(theme => ({
    crAppsSearch: {
      position: 'relative',
      height: 40,
      marginTop: 0,
      marginBottom: 0,
      width: '100%',

      '& .MuiOutlinedInput-input': {
        padding: ' 10px 14px',
        paddingLeft: 0,
      },
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: borderLight ? '#efefef' : theme.palette.text.secondary,
      },
    },
    fontBold: {
      fontFamily: Fonts.MEDIUM,
    },
    pointer: {
      cursor: 'pointer',
    },
  }));
  const classes = useStyles(props);
  return (
    <>
      <Hidden xsDown>
        <Box mx={{sm: 3, xl: 5}} width={1} maxWidth={320}>
          <TextField
            margin='normal'
            placeholder={placeHolder}
            variant='outlined'
            className={clsx(classes.crAppsSearch, 'crAppsSearch')}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start' className={classes.fontBold}>
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            value={value}
            onChange={onChange}
          />
        </Box>
      </Hidden>
      <Hidden smUp>
        <Box ml='auto'>
          <IconButton
            className={clsx(classes.crAppsSearchIcon, 'crAppsSearchIcon')}
            aria-describedby={id}
            onClick={handleClick}>
            <SearchIcon className={classes.pointer} />
          </IconButton>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'center',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}>
            <Box mx={{sm: 3, xl: 5}} width={1} maxWidth={320}>
              <TextField
                margin='normal'
                placeholder={placeHolder}
                variant='outlined'
                className={clsx(classes.crAppsSearch, 'crAppsSearch')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      position='start'
                      className={classes.fontBold}>
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                value={value}
                onChange={onChange}
              />
            </Box>
          </Popover>
        </Box>
      </Hidden>
    </>
  );
};

export default SearchBar;

SearchBar.defaultProps = {
  borderLight: false,
};

SearchBar.prototype = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  borderLight: PropTypes.bool,
  placeHolder: PropTypes.string,
};

import React from 'react';
import Box from '@material-ui/core/Box';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import DeleteIcon from '@material-ui/icons/Delete';
import IntlMessages from '../../../../../../@crema/utility/IntlMessages';
import CloseIcon from '@material-ui/icons/Close';
import {useDropzone} from 'react-dropzone';
import CardCheckedList from './CardCheckedList';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import {grey} from '@material-ui/core/colors';
import {Fonts} from '../../../../../../shared/constants/AppEnums';

const CardHeader = props => {
  const {onClickDeleteIcon, onCloseAddCard, onAddAttachments} = props;
  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      const files = acceptedFiles.map(file => {
        return {
          id: Math.floor(Math.random() * 10000),
          file,
          preview: URL.createObjectURL(file),
        };
      });
      onAddAttachments(files);
    },
  });

  const useStyles = makeStyles(theme => ({
    iconRoot: {
      marginRight: 8,
      color: grey[600],
      cursor: 'pointer',
    },
    pointer: {
      cursor: 'pointer',
    },
  }));

  const classes = useStyles(props);

  return (
    <Box
      mx={-3}
      mb={3}
      display='flex'
      alignItems='center'
      justifyContent='space-between'>
      <Box px={3} display='flex' alignItems='center'>
        <Box {...getRootProps({className: 'dropzone'})}>
          <input {...getInputProps()} />
          <AttachFileIcon className={classes.iconRoot} />
        </Box>
        <Box>
          <DeleteIcon
            className={classes.iconRoot}
            onClick={onClickDeleteIcon}
          />
        </Box>
      </Box>

      <Box component='h4' px={3} fontFamily={Fonts.BOLD}>
        <IntlMessages id='scrumboard.board' />
      </Box>

      <Box px={3} textAlign='right' width='152'>
        <CloseIcon
          className={classes.pointer}
          onClick={() => onCloseAddCard()}
        />
      </Box>
    </Box>
  );
};

export default CardHeader;

CardCheckedList.prototype = {
  onClickDeleteIcon: PropTypes.func,
  onCloseAddCard: PropTypes.func,
  onAddAttachments: PropTypes.func,
};

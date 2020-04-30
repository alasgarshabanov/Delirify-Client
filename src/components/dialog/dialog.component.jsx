import React, { useState, useEffect, useRef } from "react";
import {
  Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Typography
} from "@material-ui/core";
import useFetch from "../../hooks/useFetch.hook";
import LoadingComponent from "../ui/loadin.component";

const DialogComponent = props => {
  const { getContentQuery, visible } = props;
  const [{ isLoading, response, error }, doFetch] = useFetch();
  const [open, setOpen] = useState(visible || false);
  const [contenLoaded, setContentLoaded] = useState(false);
  const [title, setTitle] = useState('Title loading...');
  const [content, setContent] = useState('Content loading...');

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (!contenLoaded)
      doFetch({
        data: getContentQuery
      })
  }, [doFetch, getContentQuery, contenLoaded]);

  useEffect(() => {
    if (response) {
      if ( typeof response.data !== 'undefined' ) {
        const { data } = response;
        if (typeof data.pageTranslation !== 'undefined') {
          const { pageTranslation } = data;
          if (pageTranslation) {
            if (pageTranslation.title) setTitle(pageTranslation.title);
            if (pageTranslation.body) setContent(pageTranslation.body);
            setContentLoaded(true);
          } else {
            setContent("Sorry Something Went Wrong");
          }
        }
      }
    }
    if (error) {
      setContent("Sorry Something Went Wrong");
    }

  }, [response, error]);


  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return(
    <Dialog
      open={open}
      onClose={handleClose}
      scroll='paper'
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      { isLoading && <LoadingComponent /> }
      <DialogTitle id="scroll-dialog-title">
        { title || 'Loading' }
      </DialogTitle>
      <DialogContent dividers>
        <DialogContentText
          id="scroll-dialog-description"
          ref={descriptionElementRef}
          tabIndex={-1}
        >
          <Typography component={'span'} variant={'body2'}>
            { content || 'Loading...' }
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="outlined" color="primary">
          OK
        </Button>
      </DialogActions>
    </Dialog>
  )

};

export default DialogComponent;

import React from 'react';
import Alert from '@material-ui/lab/Alert';

import useStyles from "./errorHandler.style";

const BackendErrorMessages = ({ backendErrors }) => {
    const classes = useStyles();
    const errorMessages = Object.keys(backendErrors).map(name => {
        const messages = backendErrors[name].join(' ');
        return `${name}: ${messages}`;
    });

    return(
    <Alert severity="error" className={classes.alertDistance}>
        <ul className={classes.alertList}>
            {
                errorMessages && errorMessages.map(errMessage => (
                    <li key={errMessage}>{errMessage}</li>
                ))
            }
        </ul>
    </Alert>
    );
};

export default BackendErrorMessages;

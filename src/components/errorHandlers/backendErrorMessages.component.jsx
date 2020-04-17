import React from 'react';
import Alert from '@material-ui/lab/Alert';

const BackendErrorMessages = ({ backendErrors }) => {
    const errorMessages = Object.keys(backendErrors).map(name => {
        const messages = backendErrors[name].join(' ');
        return `${name}: ${messages}`;
    })
    return(
    <Alert severity="error">
        <ul>
            {
                errorMessages && errorMessages.map(errMessage => (
                    <li key={errMessage}>{errMessage}</li>
                ))
            }
        </ul>
    </Alert>
    );
}

export default BackendErrorMessages;
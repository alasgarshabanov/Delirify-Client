import React from "react";
import {Button, Typography} from "@material-ui/core";

import {useRegistrationContext, registrationActions} from "../../contexts/providers/registration.context";

const ResetWholeRegistrationForm = props => {
  const [, dispatch] = useRegistrationContext();

  const handleOnClick = () => {
    dispatch({ type: registrationActions.RESET_A_WHOLE_FORM });
  };

  return (
      <Typography>
        <Button color="secondary" variant="outlined" onClick={handleOnClick}>
          Reset and start from the beginning
        </Button>
        <br /><br />
      </Typography>
  )
};


export default ResetWholeRegistrationForm;

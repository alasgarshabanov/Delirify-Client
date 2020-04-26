import React from "react";
import { useIntl } from "react-intl";
import {Stepper, Step, StepLabel, StepContent} from "@material-ui/core";
import MobileEnterContainer from "./registerSteps/mobileEnter.container";

import { useRegistrationContext } from "../../contexts/providers/registration.context";
import PersonalData from "./registerSteps/perosnalData.container";

const RegisterContainer = props => {
  const { classes } = props;
  const [registrationState] = useRegistrationContext();
  const {formatMessage: t} = useIntl();

  const { currentStep } = registrationState;

  const TEXT_NEXT = t({ id: "NEXT", defaultMessage: "Next"});
  const TEXT_BACK = t({ id: "BACK", defaultMessage: "Back"});
  const FINISH    = t({ id: "FINISH", defaultMessage: "Finish"});


  return(
    <div className={classes.root}>
      <Stepper activeStep={currentStep} orientation="vertical">
        <Step key={0}>
          <StepLabel>Mobile Verification</StepLabel>
          <StepContent>
            { (currentStep === 0 || currentStep === 1) &&
            <MobileEnterContainer translations={{ TEXT_NEXT }} classes={classes} {...props} />}
          </StepContent>
        </Step>
        <Step key={1}>
          <StepLabel>Personal Data</StepLabel>
          <StepContent>
            { currentStep === 1 && <PersonalData translations={{ TEXT_NEXT }} classes={classes} {...props} />}
          </StepContent>
        </Step>
        <Step key={2}>
          <StepLabel>Address</StepLabel>
          <StepContent>
            { currentStep === 2 && <MobileEnterContainer translations={{ TEXT_NEXT }} classes={classes} {...props} />}
          </StepContent>
        </Step>
      </Stepper>
  </div>
)
};

export default RegisterContainer;

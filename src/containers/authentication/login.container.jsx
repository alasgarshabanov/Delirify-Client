import React, { useState, useEffect } from 'react';
import { Box, Grid, Button, TextField } from "@material-ui/core";
import isEmail from "validator/lib/isEmail";
import isLength from "validator/lib/isLength";
import useFetch from "../../hooks/useFetch.hook";
/* import { useIntl } from "react-intl";
import { Box, Grid, Button, TextField } from "@material-ui/core";
import InputMask from "react-input-mask";
import { registrationActions, useRegistrationContext } from "../../../contexts/providers/registration.context";
import LoadingComponent from "../../../components/ui/loadin.component";
import TimerComponent from "../../../components/timer/timer.component";
import { SMS_CODE_VERIFICATION_EXPIRE_SECONDS } from "../../../config";
import ActionAlertComponent from "../../../components/ui/actionAlert.component";

 */
const formInitialState = {
  email : {
    value:"",
    isValid:false,
    message:"",
  },
  password : {
    value:"",
    isValid:false,
    message:"",
  }
};
const LoginEnterContainer = () => {
  const [formState,setFormState]=useState(formInitialState);
  const [alert, setAlert] = useState({message: '', type: ''});
  const [{ response, error, isLoading }, doFetch] = useFetch();
  const {email,password} = formState;
  
  useEffect(() => {
    console.log("Resp - >> ", response);
    console.log("Errr > ", error);
  }, [response, error])
  
  const hendeleInputChange = (ev) =>{
    ev.preventDefault();
    const { name, value } = ev.target;

    setAlert({
      ...alert,
      message: "",
    });
 
    if (name === "email") {
      if (!isEmail(value)) {
        setFormState({
          ...formState,
          email: {
            isValid: false,
            message: "You email auth is incorrect",
            value: value,
          },
        });
        return;
      }
    } else {
      if (!isLength(value, { min: 5 })) {
        setFormState({
          ...formState,
          password: {
            isValid: false,
            message: "Your password isincorrect",
            value: value,
          },
        });
        return;
      }
    }
 
    setFormState({
      ...formState,
      [name]: {
        isValid: true,
        message: "",
        value: value,
      },
    });
  

  }

 
const hendleLoginFromSubmission = (ev) => {
  ev.preventDefault();
  if (!email.isValid || !password.isValid){
    setAlert({
      type: "danger",
      message:"Your email or password is incorrect",
    });
    return;
  }


  /* sorgu */
  const request = doFetch({
    data: {
      query:`mutation LoginUser($identity: String!, $password: String! ) {
        registerUser(identity: $identity, password: $password) {
          success
          message
        }
      }`,
      variables: {
        identifier: email.value,
        password: password.value
      }
    }
  });
};
  
  return (

    <div>
      <Grid xs={12}>
        <form onSubmit={hendleLoginFromSubmission}>
          <Grid item xs={12} sm={12}>
            <TextField
              id="email"
              name="email"
              required={true}
              type="email"
              fullWidth
              label="Email"
              value={email.value}
              error={!email.isValid}
              helperText={(!email.isValid && email.message.length > 0) && email.message}
              onChange={hendeleInputChange}
            />
          </Grid>
          {  email.isValid ?  <Grid item xs={12} sm={12}>
          <TextField
            id="password"
            type="password"
            name="password"
            required={true}
            fullWidth
            label="Password"
            value={password.value}
            error={!password.isValid}
            helperText={(!password.isValid && password.message.length > 0) && email.message}
            onChange={hendeleInputChange}
          />
        </Grid>
           : null
            
        
        }
          <Grid item xs={12} sm={12}>
            <Button type="submit" >Login</Button>
          </Grid>
        </form>
      </Grid>
    </div >

  );
};
export default LoginEnterContainer;

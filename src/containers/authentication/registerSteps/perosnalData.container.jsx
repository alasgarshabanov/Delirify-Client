import React, {useState} from "react";
import { useIntl } from "react-intl";
import {
  Grid, TextField, RadioGroup, FormControlLabel, Radio, Link, FormControl, FormLabel,
  Checkbox, FormHelperText, Box, Button
} from "@material-ui/core";
import { object, string, bool, number } from 'yup';
import DialogComponent from "../../../components/dialog/dialog.component";

const formInitialState = {
  name: '',
  surname: '',
  email: '',
  password: '',
  userType: '',
  termsAccepted: false
};
const alertInitialState = { type: 'error', message: '' };

const PersonalData = props => {
  const { classes, translations } = props;
  const {formatMessage: t} = useIntl();
  const [form, setForm] = useState(formInitialState);
  const [values, setValues] = useState({
    alert: alertInitialState,
    errors: {},
    touchedFields: {},
    showTerms: false
  });

  const { name, surname, email, password, userType, termsAccepted} = form;
  const { alert, errors, touchedFields, showTerms } = values;

  let validations = {
    name: string().required('Name is required'),
    surname: string().required('Surename field is required'),
    email: string().email('Not valid email')
      .required('Field is required'),
    password: string().required('Password is required')
      .min(6, 'Password min lenght is 6 characters'),
    userType: number().oneOf([1, 3], 'Please select one of user types')
      .required('User type selection is required'),
    termsAccepted: bool().oneOf([true], 'You have to read and accept terms')
  };

  let fullValidationSchema = object().shape({
    name: validations.name,
    surname: validations.surname,
    password: validations.password,
    email: validations.email,
    userType: validations.userType,
    termsAccepted: validations.termsAccepted
  });


  const handleOnChange = ev => {
    const name = ev.target.name;
    const value = name === 'termsAccepted'
      ? !termsAccepted
      : ev.target.value;

    validations[name].validate(value)
      .then(function(valid) {
        if (valid) {
          delete errors[name];
          setValues({
            ...values,
            error: alertInitialState,
            touchedFields: {...touchedFields, [name]: true}}
          );
        }
      })
      .catch((err) => {
        setValues({
          ...values, touchedFields: {...touchedFields, [name]: true},
          errors: {...errors, [name]: err.message }}
        );
      });

    setForm({...form, [name]: value});
  };

  const handleNext = ev => {
    ev.preventDefault();

    fullValidationSchema.validate({ name, surname, password, email, userType, termsAccepted })
      .then((ex) => {
        console.log('-- > >', ex);
      }).catch((err) => {
      setValues({...values, error: { type:'error', message: err.message }});
    });

  };

  const handleShowTerms = () => {
    setValues({ ...values, showTerms: !showTerms });
  };

  const getTermsQuery = {
    query: `query GetPageTranslation($id: Int!, $locale: String) {
      pageTranslation(pageId: $id, locale: $locale) {
        title
        body
      }
    }`,
    variables: {
      "id": 8,
      "locale": "az"
    }
  };

  return(
    <Box>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="name"
            name="name"
            required={true}
            fullWidth
            label="Name"
            className={classes.formField}
            onChange={handleOnChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="surname"
            required
            fullWidth
            name="surname"
            label="Surname" className={classes.formField}
            onChange={handleOnChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="email"
            required
            fullWidth
            label="Email"
            name="email"
            type="email"
            className={classes.formField}
            onChange={handleOnChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="passowrd"
            required
            fullWidth
            type="password"
            label="Password"
            name="password"
            className={classes.formField}
            onChange={handleOnChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <FormLabel component="legend">User Type</FormLabel>
            <br/>
            <RadioGroup
              row
              name="userType"
              aria-label="quiz"
              value={userType}
              onChange={handleOnChange}
            >
              <FormControlLabel value="1" control={<Radio />} label="Huquqi" />
              <FormControlLabel value="3" control={<Radio />} label="Fiziki" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control = {
              <Checkbox
                required
                id='termsAccepted'
                name='termsAccepted'
                value={termsAccepted}
                color="primary"
                onChange={handleOnChange}
              />
            }
            label={t(
              {id:"ACCEPT_TERMS_AND_CONDITIONS"},
              {
                a: msg => (
                  <span
                    className="external-link"
                    data-url="terms"
                  >
                      {msg}
                    </span>
                )
              })}
          />
          (<Link href="#" onClick={handleShowTerms} > Terms and conditions </Link>)
          {touchedFields.termsAccepted && errors.termsAccepted
            ? <FormHelperText> {errors.termsAccepted} </FormHelperText> : ''
          }
          { showTerms && <DialogComponent visible={ showTerms } getContentQuery={ getTermsQuery } /> }
        </Grid>
      </Grid>
      <div className={ classes.actionsContainer }>
        <Button
          variant="contained"
          color="primary"
          onClick={handleNext}
          className={classes.button}
          disabled={errors && Object.entries(errors).length > 0}
        >
          {translations.TEXT_NEXT}
        </Button>
      </div>
    </Box>
  )
};

export default PersonalData;

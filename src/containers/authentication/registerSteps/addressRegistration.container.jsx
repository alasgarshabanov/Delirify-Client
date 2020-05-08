import React, { useEffect, useState } from "react";
import {Box, Grid, TextField, Divider, FormControl, InputLabel, Select } from "@material-ui/core";
import { object, string, number } from 'yup';


import {useRegistrationContext} from "../../../contexts/providers/registration.context";
import useFetch from '../../../hooks/useFetch.hook';
import ActionAlertComponent from "../../../components/ui/actionAlert.component";
import LoadingComponent from "../../../components/ui/loadin.component";
import MapComponent from "../../../components/map/map.component";

const formInitialState = {
  label: '',
  contactNumber: '',
  city_id: '',
  district_id: '',
  addressLine1: '',
  addressLine2: '',
  zipCode: '',
  latitude: '',
  longitude: ''
};

const notificationInitialState = { hasNotificationMessage: false, type: 'error', message: '' };

const AddressRegistration = props => {
  const { classes, translations } = props;
  const [registrationState, dispatch] = useRegistrationContext();
  const [{ response, error, isLoading }, doFetch] = useFetch();
  const [form, setForm] = useState(formInitialState);
  const [values, setValues] = useState({
    inputErrors: {},
    notification: notificationInitialState,
    touchedFields: {}
  });

  const { inputErrors, notification, touchedFields } = values;
  const { label, contactNumber, city_id, district_id, addressLine1, addressLine2, zipCode, latitude, longitude } = form;

  useEffect(() => {

    doFetch()

  }, [error, response, doFetch])


  /**
   * All fields related validation
   * @type {{zipCode: *, city: *, district: *, latitude: undefined, contactNumber: *, addressLine1: *, addressLine2: undefined, label: *, longitude: undefined}}
   */
  let validations = {
    label: string().required('Please set any label. Example: Home, Work ... etc.'),
    contactNumber: string().required('Please don\'t remove mobile number'),
    city_id: number().required('Please select your city'),
    district_id: number().required('Please select you district'),
    addressLine1: string().required('Address is required'),
    addressLine2: string(),
    zipCode: string().max(8, 'Zip Code example is AZ1000'),
    latitude: number(),
    longitude: number()
  };

  /**
   * Will be used before submitting form
   */
  let fullValidationSchema = object().shape({
    label: validations.label,
    contactNumber: validations.contactNumber,
    city_id: validations.city,
    district_id: validations.district,
    addressLine1: validations.addressLine1,
    addressLine2: validations.addressLine2,
    zipCode: validations.zipCode,
    latitude: validations.latitude,
    longitude: validations.longitude,
  });


  const handleOnChange = ev => {
    const { name, value } = ev.target;

    validations[name].validate(value)
      .then(function(valid) {
        if (valid) {
          delete [name];
          setValues({
            ...values,
            inputErrors: {},
            notification: notificationInitialState,
            touchedFields: {...touchedFields, [name]: true}}
          );
        }
      })
      .catch((err) => {
        setValues({
          ...values, touchedFields: {...touchedFields, [name]: true},
          inputErrors: {...inputErrors, [name]: err.message }}
        );
      });

    setForm({...form, [name]: value});
  };

  /**
   * Handle Alert Close
   */
  const handleCloseAlert = () => {
    setValues({ ...values, notification: notificationInitialState });
  }


  return (
    <div>
      {
        notification.hasNotificationMessage &&
        <ActionAlertComponent message={notification.message} severity={notification.type} onClose={handleCloseAlert} />
      }
      { isLoading && <LoadingComponent /> }
      { (!isLoading && !notification.hasNotificationMessage) && (
        <Box>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TextField
                id="label"
                name="label"
                required={true}
                fullWidth
                label="Label"
                placeholder="Address Label. (ex: Home, Work etc)"
                className={classes.formField}
                onChange={ handleOnChange }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-native-simple">Age</InputLabel>
                <Select
                  native
                  value={city_id}
                  onChange={ handleOnChange }
                  inputProps={{
                    name: 'city_id',
                    id: 'city_id-select',
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
      )}
      <Divider style={{padding: '10px 0' }} />
      <MapComponent
        google={ 'TEXT' }
        center={{lat: 18.5204, lng: 73.8567}}
        height='300px'
      />
    </div>
  )
}

export default AddressRegistration;

import React, { useEffect, useState } from "react";
import {Box, Grid, TextField, FormControl, InputLabel, Select, Link, Button } from "@material-ui/core";
import { object, string, number } from 'yup';


import {useRegistrationContext} from "../../../contexts/providers/registration.context";
import useFetch from '../../../hooks/useFetch.hook';
import ActionAlertComponent from "../../../components/ui/actionAlert.component";
import LoadingComponent from "../../../components/ui/loadin.component";
import MapComponent from "../../../components/map/map.component";

const formInitialState = {
  label: '',
  phoneNumber: '',
  cityId: '',
  distinctId: '',
  addressLine1: '',
  zipCode: '',
  latitude: 0,
  longitude: 0
};

const notificationInitialState = { hasNotificationMessage: false, type: 'error', message: '' };

const AddressRegistration = props => {
  const { classes, translations } = props;
  const [ registrationState, dispatch ] = useRegistrationContext();
  const [{ response, error, isLoading }, doFetch] = useFetch();
  const [form, setForm] = useState(formInitialState);
  const [showMap, setShowMap] = useState(false)
  const [values, setValues] = useState({
    inputErrors: {},
    notification: notificationInitialState,
    touchedFields: {},
    cities: [],
    district: []
  });

  const { inputErrors, notification, touchedFields, cities, district } = values;
  const { label, phoneNumber, cityId, distinctId, addressLine1, zipCode, latitude, longitude } = form;

  useEffect(() => {
    fetchAllCities();
    setForm({ ...form, phoneNumber: registrationState.mobile })
  }, []);

  useEffect(() => {
    if (response) {
      if (response.data) {
        // Retrieve Cities
        const { getCountryCities, getAllDistinct} = response.data;
        if ( typeof getCountryCities !== 'undefined' ) {
          const { success, message, cities } = getCountryCities;
          if (success && cities) {
            setValues({...values, cities });
          } else {
            if (message && !success)
              setValues({...values, notification: { hasNotificationMessage: true, message, type: 'error' }});
          }
        }

        // Retrieve Distinct
        if ( typeof getAllDistinct !== 'undefined' ) {
          const { success, message, meta } = getAllDistinct;
          if (success && meta) {
            setValues({...values, district: meta });
          } else {
            if (message && !success)
              setValues({...values, notification: { hasNotificationMessage: true, message, type: 'error' }});
          }
        }
      }
    }

    if (error) {
      let message = '';
      if (typeof error === 'object') {
        message = error.map((err) => {
          return err.message || '';
        });
      } else
        message = JSON.stringify(error);

      if (!notification.hasNotificationMessage)
        setValues({...values, notification: {hasNotificationMessage: true, type: "error", message }});
    }

    if (isLoading)
      setValues({...values, notification: { hasNotificationMessage: false, message: '', type: 'error' }});

  }, [error, response, isLoading])

  /**
   * All fields related validation
   * @type {{zipCode: *, city: *, district: *, latitude: undefined, phoneNumber: *, addressLine1: *, addressLine2: undefined, label: *, longitude: undefined}}
   */
  let validations = {
    label: string().required('Please set any label. Example: Home, Work ... etc.'),
    phoneNumber: string().required('Please don\'t remove mobile number'),
    cityId: number().required('Please select your city'),
    distinctId: number().required('Please select you district'),
    addressLine1: string().required('Address is required'),
    zipCode: string().max(8, 'Zip Code example is AZ1000'),
    latitude: number(),
    longitude: number()
  };

  /**
   * Will be used before submitting form
   */
  let fullValidationSchema = object().shape({
    label: validations.label,
    phoneNumber: validations.phoneNumber,
    cityId: validations.city,
    distinctId: validations.district,
    addressLine1: validations.addressLine1,
    zipCode: validations.zipCode,
    latitude: validations.latitude,
    longitude: validations.longitude,
  });

  /**
   * Complete Submission
   */
  const completeFormSubmission = (ev) => {
    ev.preventDefault();
    fullValidationSchema.validate({
      label, phoneNumber, cityId, distinctId, addressLine1, zipCode,
      latitude, longitude
    })
      .then(() => {
        fetchSubmitForm({
          label, phoneNumber, cityId: parseInt(cityId), distinctId: parseInt(distinctId), addressLine1, zipCode,
          latitude: parseInt(latitude), longitude: parseInt(longitude)
        });
      }).catch((err) => {
        let message = "Some error ocurred, please be sure all required fields are correctly filled."
        if (err.errors)
          message = err.errors.map( em => {
            return em
          })
        setValues({...values, notification: {
          hasNotificationMessage: true, type:'error', message: message }
        });
      });
  }

  /**
   * Pass to child MapComponent to
   * @param positions
   */
  const mapDataChanged = (positions) => {
    setForm({ ...form, latitude: positions.lat, longitude: positions.lng });
  }

  const handleOnChange = ev => {
    const { name, value } = ev.target;

    if (name === 'cityId') {
      setValues({ ...values, district: [] });
      fetchAllDistrict(parseInt(value));
    }

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


  /**
   * Submit form with user Data
   * @param postedData
   */
  const fetchSubmitForm = (postedData) => {
    doFetch({
      data: {
        query:`mutation CreateNewAddress($postedData: AddressCreateInput!, $lang: String = "az") {
          createAddress(postedData: $postedData, lang: $lang) {
            success
            message
            address {
              publicId
              addressLine1
            }
          }
        }`,
        variables: {
          postedData,
          lang: 'ru'
        }
      }
    });

  }

  /**
   * Get Cities All Distinct
   * @param cityId
   */
  const fetchAllDistrict = (cityId) => {
    doFetch({
      data: {
        query:`query GetDistinct($cityId: Int!, $lang: String = "az") {
          getAllDistinct(cityId: $cityId, lang: $lang) {
            success
            message
            meta {
              id
              title
            }
          }
        }`,
        variables: {
          cityId,
          lang: 'ru'
        }
      }
    });
  }

  const fetchAllCities = () => {
    doFetch({
      data: {
        query:`query GetCountryCities($countryId: ID!, $lang: String = "az") {
          getCountryCities(countryId: $countryId, lang: $lang) {
            success
            message
            cities {
              id
              title
            }
          }
        }`,
        variables: {
          countryId: 5,
          lang: 'az'
        }
      }
    });
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
              <FormControl className={classes.formControl} >
                <TextField
                  id="label"
                  name="label"
                  required={true}
                  fullWidth
                  value={label}
                  label="Label"
                  placeholder="Address Label. (ex: Home, Work etc)"
                  className={classes.formField}
                  onChange={ handleOnChange }
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-native-simple">City</InputLabel>
                <Select
                  native
                  value={cityId}
                  onChange={handleOnChange}
                  inputProps={{
                    name: 'cityId',
                    id: 'cityId-select',
                  }}
                >
                  <option aria-label="None" value="" />
                  { cities.length > 0 && cities.map((city) =>
                    <option key={city.id + '-city'} value={city.id}>{city.title}</option>
                  )}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl className={classes.formControl} disabled={ district.length < 1 }>
                <InputLabel htmlFor="distinctId">District</InputLabel>
                <Select
                  native
                  value={distinctId}
                  onChange={ handleOnChange }
                  inputProps={{
                    name: 'distinctId',
                    id: 'distinctId-select',
                  }}
                >
                  <option aria-label="None" value="" />
                  { district.length > 0 && district.map((dis) =>
                    <option key={dis.id + '-dis'} value={dis.id}>{dis.title}</option>
                  )}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl className={classes.formControl} >
                <TextField
                  id="address"
                  name="addressLine1"
                  required={true}
                  fullWidth
                  value={addressLine1}
                  label="Address"
                  placeholder="Address, Street, Home number etc."
                  className={classes.formField}
                  onChange={ handleOnChange }
                />
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <FormControl className={classes.formControl} >
                <TextField
                  id="zip-code"
                  name="zipCode"
                  required={true}
                  fullWidth
                  value={zipCode}
                  label="Zip"
                  placeholder="Zip Code"
                  className={classes.formField}
                  onChange={ handleOnChange }
                />
              </FormControl>
            </Grid>
            <Grid item xs={8}>
              <FormControl className={classes.formControl} >
                <TextField
                  id="contact-number"
                  name="phoneNumber"
                  required={true}
                  fullWidth
                  value={phoneNumber}
                  label="Contact Number"
                  placeholder="You can set any number"
                  className={classes.formField}
                  onChange={handleOnChange}
                />
              </FormControl>
            </Grid>
          </Grid>
        </Box>
      )}
      {/*<Divider style={{margin: '10px 0' }} />*/}
      <div style={{margin: "15px 0"}}>
        <Link href="#" color="secondary" disabled={showMap} onClick={() => setShowMap(!showMap)}>
          {
            showMap ? "" : "Optional: If you wan you can pin your location in the map. To show map click me"
          }
        </Link>
      </div>
      { showMap && <MapComponent mapDataChanged={ mapDataChanged } /> }
      <div className={ classes.actionsContainer }>
        <Button
          variant="contained"
          color="primary"
          onClick={ completeFormSubmission }
          className={classes.button}
          disabled={inputErrors && Object.entries(inputErrors).length > 0}
        >
          Complete Registration
        </Button>
      </div>
    </div>
  )
}

export default AddressRegistration;

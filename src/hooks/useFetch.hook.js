import {useEffect, useState, useCallback } from "react";
import axios from "axios";

import useLocalStorage from './useLocalStorage.hook';

export default url => {
  const baseURL = 'https://conduit.productionready.io/api';
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  const [options, setOptions] = useState({});
  const [token] = useLocalStorage('token');

  const doFetch = useCallback((options={}) => {
    setOptions(options);
    setIsLoading(true);
  }, []);

  useEffect(() => {
    const requestOptions = {
      ...options,
      ...{
        headers: {
          authorization: token ? `Token ${token}` : ''
        }
      }
    }
    if (!isLoading)
      return;
    axios(baseURL + url, requestOptions).then(res => {
      setIsLoading(false);
      setResponse(res.data);
    }).catch(err => {
      setIsLoading(false);
      const {data} = err.response;
      if (data)
        setError(data);
      else
        setError('Unknown Error');
    });
  }, [isLoading, options, url, token]);

  return [{isLoading, response, error}, doFetch];
};
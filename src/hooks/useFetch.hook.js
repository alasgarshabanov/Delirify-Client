import {useEffect, useState, useCallback } from "react";
import axios from "axios";

import useLocalStorage from './useLocalStorage.hook';
import { GRAPHQL_URL } from "../config";

export default () => {
  const baseURL = GRAPHQL_URL;
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState({});
  const [token] = useLocalStorage('token');

  const doFetch = useCallback((options={}) => {
    setOptions(options);
    setIsLoading(true);
  }, []);

  useEffect(() => {
    let skipGetResponseAfterDestroy = false;
    const requestOptions = {
      ...options,
      ...{
        url: baseURL,
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          authorization: token ? `Bearer ${token}` : ''
        }
      }
    };

    if (!isLoading)
      return;
    axios(requestOptions).then(res => {
      if (!skipGetResponseAfterDestroy) {
        setIsLoading(false);
        if (res.data) {
          setResponse(res.data);
          const { errors } = res.data;
          if (typeof errors !== 'undefined') {
            setError(errors);
          }
        }
      }
    }).catch(err => {
      if (!skipGetResponseAfterDestroy && err) {
        setIsLoading(false);
        if (typeof err.data !== 'undefined') {
          const { data } = err.response;
          if (data)
            setError(data);
        }
        else
          setError('Unknown Error: ' + JSON.stringify(err));
      }
    });

    // After component destroyed, if we will need on
    return () => { skipGetResponseAfterDestroy = true; }
  }, [isLoading, options, token, baseURL]);

  return [{isLoading, response, error}, doFetch];
};

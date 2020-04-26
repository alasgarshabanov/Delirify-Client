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
      console.log('Fetch >> ', res);
      if (!skipGetResponseAfterDestroy) {
        setIsLoading(false);
        setResponse(res.data);
      }
    }).catch(err => {
      console.log('Fetch err > >', err);
      if (!skipGetResponseAfterDestroy) {
        setIsLoading(false);
        const { data } = err.response;
        if (data)
          setError(data);
        else
          setError('Unknown Error');
      }
    });

    // After component destroyed
    return () => { skipGetResponseAfterDestroy = true; }
  }, [isLoading, options, token, baseURL]);

  return [{isLoading, response, error}, doFetch];
};

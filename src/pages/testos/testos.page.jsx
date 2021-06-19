import React, { useEffect } from "react";

import useFetch from '../../hooks/useFetch.hook';

const TestosPage = () => {
  const [{ response, error, isLoading }, doFetch] = useFetch();

  useEffect(() => {
    if (response) {
      if (response.data)
        console.log('RESP ', response, "COKKEN >", document.cookie);
    }

    if (error) {
      console.log('RESP ', error);
    }

  }, [error, response]); // adding values cause error

  const handleClick = () => {
    doFetch({
      data: {
        query:`mutation LoginUser($identity: String!, $password: String!) {
          loginUser(identity: $identity, password: $password) {
            success
            message
            userId
            user {
              publicId
            }
            accessToken
          }
        }`,
        variables: {
          "identity": "F6FDD176",
          "password": "Pa$$w0rd!"
        }
      }
    })
  }

  /**
   *
   */
  const handleClickRemove = () => {
    fetch('http://api.dlfy.dp/t/remove', {method: 'POST'})
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.log('Err > >', err));
  }

  /**
   *
   */
  const handleClickRefresh = () => {
    fetch('http://api.dlfy.dp/t/refresh', {method: 'GET'})
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.log('Err > >', err));
  }


  return (
    <div>
      <p color="main" onClick={handleClick}>Click me!</p>
      <p color="main" onClick={handleClickRemove}>Delete Cookie!</p>
      <p color="main" onClick={handleClickRefresh}>Refresh Token!</p>
    </div>
  )
}

export default TestosPage;

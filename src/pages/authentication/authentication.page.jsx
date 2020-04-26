import React from "react";
import AuthenticationComponent from "../../containers/authentication/authentication.container";

const AuthenticationPage = props => {
  const { match } = props;
  const isLoginView = match.path === '/login';

  return(
    <AuthenticationComponent isLoginView={isLoginView} {...props} />
  );
};

export default AuthenticationPage;

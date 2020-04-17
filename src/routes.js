import React from "react";
import {Switch, Route} from 'react-router-dom';

import HomePage from './pages/home';
import GlobalFeed from './pages/globalFeed';
import Article from './pages/article';
import AuthenticationPage from "./pages/authentication/authentication.page";

export default () => {
  return(
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/feeds" exact component={GlobalFeed}/>
      <Route path="/article/:slug" component={Article}/>
      <Route path="/login" component={AuthenticationPage} />
      <Route path="/register" component={AuthenticationPage} />
    </Switch>
  )
}

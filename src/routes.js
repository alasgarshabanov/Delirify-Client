import React from "react";
import {Switch, Route} from 'react-router-dom';

import HomePage from './pages/home/home.page';
import Article from './pages/article';
import GlobalFeedPage from './pages/globalFeed/gloabFeed.page';
import AuthenticationPage from "./pages/authentication/authentication.page";

export default () => {
  return(
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/feeds" exact component={GlobalFeedPage} />
      <Route path="/order/:id" component={Article} />
      <Route path="/login" component={AuthenticationPage} />
      <Route path="/register" component={AuthenticationPage} />
    </Switch>
  )
}

import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import Routes from './routes';
import TopBar from "./components/topBar/tobBar.component";

import CurrentUserChecker from './utils/currentUserChecker';
import { CurrentUserProvider } from './contexts/currentUser.context';

import './App.css';

function App() {
  return (
    <CurrentUserProvider>
      <CurrentUserChecker>
        <Router>
          <TopBar />
          <Routes />
        </Router>
      </CurrentUserChecker>
    </CurrentUserProvider>
  );
}

export default App;

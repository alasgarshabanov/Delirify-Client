import React from 'react';
import { IntlProvider } from 'react-intl';
import { BrowserRouter as Router } from 'react-router-dom';

import MainContainer from "./containers/layouts/main.container";

import CurrentUserChecker from './utils/currentUserChecker';
import { useAppContext } from './contexts/providers/app.context';
import { CurrentUserProvider } from './contexts/providers/currentUser.context';

import './App.css';

import messages_en from './translations/en.json';
import messages_az from './translations/az.json';
import messages_ru from './translations/ru.json';

// if (!Intl.PluralRules) {
//   require('../node_modules/@formatjs/intl-pluralrules/polyfill');
//   require('../node_modules/@formatjs/intl-pluralrules/dist/locale-data/az'); // Add locale data for az
// }
//
// if (!Intl.RelativeTimeFormat) {
//   require('../node_modules/@formatjs/intl-relativetimeformat/polyfill');
//   require('../node_modules/@formatjs/intl-relativetimeformat/dist/locale-data/az'); // Add locale data for de
// }
//
// if (!Intl.DisplayNames) {
//   require('../node_modules/@formatjs/intl-displaynames/polyfill');
//   require('../node_modules/@formatjs/intl-displaynames/dist/locale-data/az'); // Add locale data for de
// }
//
const messages = {
  'en': messages_en,
  'az': messages_az,
  'ru': messages_ru
};


function App() {
  const [appState] = useAppContext();

  return (
    <IntlProvider locale={appState.locale} messages={messages[appState.locale]}>
      <CurrentUserProvider>
        <CurrentUserChecker>
          <Router>
            <MainContainer />
          </Router>
        </CurrentUserChecker>
      </CurrentUserProvider>
    </IntlProvider>
  );
}

export default App;

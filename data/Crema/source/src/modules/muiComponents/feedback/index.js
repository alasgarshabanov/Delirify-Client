import React from 'react';

export const feedbackConfigs = [
  {
    auth: 'user',
    routes: [
      {
        path: '/mui/feedback/progress/',
        component: React.lazy(() => import('./Progress')),
      },
    ],
  },
  {
    auth: 'user',
    routes: [
      {
        path: '/mui/feedback/dialog/',
        component: React.lazy(() => import('./Dialogs')),
      },
    ],
  },
  {
    auth: 'user',
    routes: [
      {
        path: '/mui/feedback/snackbars/',
        component: React.lazy(() => import('./Snacksbars')),
      },
    ],
  },
];

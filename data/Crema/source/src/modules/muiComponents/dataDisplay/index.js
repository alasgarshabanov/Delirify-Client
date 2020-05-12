import React from 'react';

export const dataDisplayConfigs = [
  {
    auth: 'user',
    routes: [
      {
        path: '/mui/db-display/avatars',
        component: React.lazy(() => import('./Avatars')),
      },
    ],
  },
  {
    auth: 'user',
    routes: [
      {
        path: '/mui/db-display/badges',
        component: React.lazy(() => import('./Badges')),
      },
    ],
  },
  {
    auth: 'user',
    routes: [
      {
        path: '/mui/db-display/chips',
        component: React.lazy(() => import('./Chips')),
      },
    ],
  },
  {
    auth: 'user',
    routes: [
      {
        path: '/mui/db-display/divider',
        component: React.lazy(() => import('./Divider')),
      },
    ],
  },
  {
    auth: 'user',
    routes: [
      {
        path: '/mui/db-display/lists',
        component: React.lazy(() => import('./Lists')),
      },
    ],
  },
  {
    auth: 'user',
    routes: [
      {
        path: '/mui/db-display/tables',
        component: React.lazy(() => import('./Tables')),
      },
    ],
  },
  {
    auth: 'user',
    routes: [
      {
        path: '/mui/db-display/tooltip',
        component: React.lazy(() => import('./Tooltip')),
      },
    ],
  },
  {
    auth: 'user',
    routes: [
      {
        path: '/mui/db-display/typography',
        component: React.lazy(() => import('./Typography')),
      },
    ],
  },
];

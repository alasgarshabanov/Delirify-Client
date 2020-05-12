import React from 'react';

export const utilConfigs = [
  {
    auth: 'user',
    routes: [
      {
        path: '/mui/utility/modal',
        component: React.lazy(() => import('./Modal')),
      },
    ],
  },
  {
    auth: 'user',
    routes: [
      {
        path: '/mui/utility/popover',
        component: React.lazy(() => import('./Popover')),
      },
    ],
  },
  {
    auth: 'user',
    routes: [
      {
        path: '/mui/utility/popper',
        component: React.lazy(() => import('./Popper')),
      },
    ],
  },
  {
    auth: 'user',
    routes: [
      {
        path: '/mui/utility/rating',
        component: React.lazy(() => import('./Rating')),
      },
    ],
  },
  {
    auth: 'user',
    routes: [
      {
        path: '/mui/utility/skeleton',
        component: React.lazy(() => import('./Skeleton')),
      },
    ],
  },
  {
    auth: 'user',
    routes: [
      {
        path: '/mui/utility/speed-dial',
        component: React.lazy(() => import('./SpeedDial')),
      },
    ],
  },
  {
    auth: 'user',
    routes: [
      {
        path: '/mui/utility/toggle-buttons',
        component: React.lazy(() => import('./ToggleButtons')),
      },
    ],
  },
  {
    auth: 'user',
    routes: [
      {
        path: '/mui/utility/tree-view',
        component: React.lazy(() => import('./TreeView')),
      },
    ],
  },
];

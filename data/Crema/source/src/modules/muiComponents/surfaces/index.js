import React from 'react';

export const surfaceConfigs = [
  {
    auth: 'user',
    routes: [
      {
        path: '/mui/surface/app-Bar',
        component: React.lazy(() => import('./AppBar')),
      },
    ],
  },
  {
    auth: 'user',
    routes: [
      {
        path: '/mui/surface/paper',
        component: React.lazy(() => import('./Paper')),
      },
    ],
  },
  {
    auth: 'user',
    routes: [
      {
        path: '/mui/surface/cards',
        component: React.lazy(() => import('./Cards')),
      },
    ],
  },
  {
    auth: 'user',
    routes: [
      {
        path: '/mui/surface/expansion',
        component: React.lazy(() => import('./ExpansionPanels')),
      },
    ],
  },
];

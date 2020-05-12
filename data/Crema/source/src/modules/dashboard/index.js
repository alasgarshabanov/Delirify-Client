import React from 'react';

export const dashBoardConfigs = [
  {
    auth: ['user'],
    routes: [
      {
        path: '/dashboards/crm',
        component: React.lazy(() => import('./CRM')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/dashboards/crypto',
        component: React.lazy(() => import('./Crypto')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/dashboards/metrics',
        component: React.lazy(() => import('./Metrics')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/dashboards/widgets',
        component: React.lazy(() => import('./Widgets')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/signin',
        component: React.lazy(() => import('../userPages/StyledUserPages')),
      },
    ],
  },
];

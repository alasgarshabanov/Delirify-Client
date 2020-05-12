import React from 'react';

export const inputsConfigs = [
  {
    auth: ['user'],
    routes: [
      {
        path: '/mui/inputs/buttons',
        component: React.lazy(() => import('./Buttons')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/mui/inputs/checkboxes',
        component: React.lazy(() => import('./Checkboxes')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/mui/inputs/date-time',
        component: React.lazy(() => import('./DataTime')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/mui/inputs/radios',
        component: React.lazy(() => import('./RadiosButton')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/mui/inputs/selects',
        component: React.lazy(() => import('./Selects')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/mui/inputs/slider',
        component: React.lazy(() => import('./Sliders')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/mui/inputs/switches',
        component: React.lazy(() => import('./Switches')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/mui/inputs/text-fields',
        component: React.lazy(() => import('./TextFields')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/mui/inputs/transfer-list',
        component: React.lazy(() => import('./TransferList')),
      },
    ],
  },
];

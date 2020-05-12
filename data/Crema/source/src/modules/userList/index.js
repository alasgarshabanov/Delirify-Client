import React from 'react';

export const userListConfig = [
  {
    auth: ['user'],
    routes: [
      {
        path: '/list-type/flat',
        component: React.lazy(() => import('./Flat/index')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/list-type/morden',
        component: React.lazy(() => import('./Morden/index')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/list-type/standard',
        component: React.lazy(() => import('./Standard/index')),
      },
    ],
  },
];

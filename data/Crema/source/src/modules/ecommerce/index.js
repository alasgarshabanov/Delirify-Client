import React from 'react';

export const ecommerceConfig = [
  {
    auth: ['user'],
    routes: [
      {
        path: '/ecommerce/list-view',
        component: React.lazy(() => import('./ListView')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/ecommerce/grid-view',
        component: React.lazy(() => import('./GridView')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/ecommerce/invoice-1',
        component: React.lazy(() => import('./Invoice1')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/ecommerce/invoice-2',
        component: React.lazy(() => import('./Invoice2')),
      },
    ],
  },
];

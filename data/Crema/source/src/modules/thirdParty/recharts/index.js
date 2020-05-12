import React from 'react';

export const rechartsConfigs = [
  {
    auth: ['user'],
    routes: [
      {
        path: '/third-party/recharts/area',
        component: React.lazy(() => import('./Area')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/third-party/recharts/bar',
        component: React.lazy(() => import('./Bar')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/third-party/recharts/composed',
        component: React.lazy(() => import('./Composed')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/third-party/recharts/line',
        component: React.lazy(() => import('./Line')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/third-party/recharts/pie',
        component: React.lazy(() => import('./Pie')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/third-party/recharts/radar',
        component: React.lazy(() => import('./Radar')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/third-party/recharts/radial',
        component: React.lazy(() => import('./Radial')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/third-party/recharts/treemap',
        component: React.lazy(() => import('./Treemap')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/third-party/recharts/scatter',
        component: React.lazy(() => import('./Scatter')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/third-party/recharts/funnel',
        component: React.lazy(() => import('./Funnel')),
      },
    ],
  },
];

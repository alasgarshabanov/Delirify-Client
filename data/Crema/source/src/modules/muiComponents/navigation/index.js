import React from 'react';

export const navigationConfigs = [
  {
    auth: 'user',
    routes: [
      {
        path: '/mui/navigation/bottom-navigation',
        component: React.lazy(() => import('./BottomNavigation')),
      },
    ],
  },
  {
    auth: 'user',
    routes: [
      {
        path: '/mui/navigation/breadcrumbs',
        component: React.lazy(() => import('./BreadCrumbs')),
      },
    ],
  },
  {
    auth: 'user',
    routes: [
      {
        path: '/mui/navigation/drawers',
        component: React.lazy(() => import('./Drawers')),
      },
    ],
  },
  {
    auth: 'user',
    routes: [
      {
        path: '/mui/navigation/links',
        component: React.lazy(() => import('./Links')),
      },
    ],
  },
  {
    auth: 'user',
    routes: [
      {
        path: '/mui/navigation/menus',
        component: React.lazy(() => import('./Menus')),
      },
    ],
  },
  {
    auth: 'user',
    routes: [
      {
        path: '/mui/navigation/steppers',
        component: React.lazy(() => import('./Steppers')),
      },
    ],
  },
  {
    auth: 'user',
    routes: [
      {
        path: '/mui/navigation/tabs',
        component: React.lazy(() => import('./Tabs')),
      },
    ],
  },
];

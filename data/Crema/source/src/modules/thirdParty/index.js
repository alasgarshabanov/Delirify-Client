import {mapConfigs} from './googleMap';
import {rechartsConfigs} from './recharts';
import React from 'react';
import {calendarConfigs} from './calendar';

export const thirdPartyConfigs = [
  ...mapConfigs,
  ...rechartsConfigs,
  {
    auth: ['user'],
    routes: [
      {
        path: '/third-party/react-color',
        component: React.lazy(() => import('./reactColor')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/third-party/react-notification',
        component: React.lazy(() => import('./reactNotification')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/third-party/react-dropzone',
        component: React.lazy(() => import('./reactDropzone')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/third-party/react-table',
        component: React.lazy(() => import('./reactTable')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/third-party/material-table',
        component: React.lazy(() => import('./materialTable')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/third-party/react-gallery',
        component: React.lazy(() => import('./reactPhotoGallery')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/third-party/react-player',
        component: React.lazy(() => import('./reactPlayer')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/third-party/react-dnd',
        component: React.lazy(() => import('./reactBeautifulDnd')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/third-party/time-line',
        component: React.lazy(() => import('./timeLine')),
      },
    ],
  },
  ...calendarConfigs,
];

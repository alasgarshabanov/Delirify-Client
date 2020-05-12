import React from 'react';

export const mapConfigs = [
  {
    auth: ['user'],
    routes: [
      {
        path: '/third-party/google-map/directions',
        component: React.lazy(() => import('./Directions')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/third-party/google-map/drawing-view',
        component: React.lazy(() => import('./DrawingView')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/third-party/google-map/event-handler',
        component: React.lazy(() => import('./EventHandler')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/third-party/google-map/geolocation',
        component: React.lazy(() => import('./GeoLocation')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/third-party/google-map/km-layer',
        component: React.lazy(() => import('./KmLayer')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/third-party/google-map/map-clustering',
        component: React.lazy(() => import('./MapClustering')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/third-party/google-map/map-overlay',
        component: React.lazy(() => import('./MapOverlay')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/third-party/google-map/map-with-search-box',
        component: React.lazy(() => import('./MapWithSearchBox')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/third-party/google-map/popup-info',
        component: React.lazy(() => import('./PopUpInfo')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/third-party/google-map/simple',
        component: React.lazy(() => import('./Simple')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/third-party/google-map/street-view',
        component: React.lazy(() => import('./StreetView')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/third-party/google-map/styled',
        component: React.lazy(() => import('./Styled')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/third-party/google-map/traffic-layer',
        component: React.lazy(() => import('./TrafficLayer')),
      },
    ],
  },
];

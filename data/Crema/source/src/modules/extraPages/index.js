import React from 'react';

export const extraPagesConfigs = [
  {
    auth: ['user'],
    routes: [
      {
        path: '/extra-pages/about-us',
        component: React.lazy(() => import('./AboutUs')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/extra-pages/knowledge-base',
        component: React.lazy(() => import('./KnowledgeBase')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/extra-pages/portfolio',
        component: React.lazy(() => import('./Portfolio')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/extra-pages/faq',
        component: React.lazy(() => import('./FAQ')),
      },
    ],
  },
];

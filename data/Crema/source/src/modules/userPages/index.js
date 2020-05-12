import React from 'react';

export const userPagesConfig = [
  {
    auth: ['user'],
    routes: [
      {
        path: '/user/sign-in-1',
        component: React.lazy(() => import('./UserPages/Signin')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/user/sign-in-2',
        component: React.lazy(() => import('./StyledUserPages/Signin')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/user/sign-up-1',
        component: React.lazy(() => import('./UserPages/Signup')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/user/sign-up-2',
        component: React.lazy(() => import('./StyledUserPages/Signup')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/user/forgot-password-1',
        component: React.lazy(() => import('./UserPages/ForgetPassword')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/user/forgot-password-2',
        component: React.lazy(() => import('./StyledUserPages/ForgetPassword')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/user/reset-password-1',
        component: React.lazy(() => import('./UserPages/ResetPassword')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/user/reset-password-2',
        component: React.lazy(() => import('./StyledUserPages/ResetPassword')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/user/lock-1',
        component: React.lazy(() => import('./UserPages/UnlockScreen')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/user/lock-2',
        component: React.lazy(() => import('./StyledUserPages/UnlockScreen')),
      },
    ],
  },
];

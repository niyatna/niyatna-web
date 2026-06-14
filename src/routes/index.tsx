import type { RouteObject } from 'react-router';

import { App } from '../App';
import { HomePage } from './HomePage';

export const routes: RouteObject[] = [
  {
    path: '/',
    Component: App,
    children: [
      {
        index: true,
        Component: HomePage,
      },
    ],
  },
];

import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const paginatedTablePlugin = createPlugin({
  id: 'paginated-table',
  routes: {
    root: rootRouteRef,
  },
});

export const PaginatedTablePage = paginatedTablePlugin.provide(
  createRoutableExtension({
    name: 'PaginatedTablePage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);

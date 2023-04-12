import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { paginatedTablePlugin, PaginatedTablePage } from '../src/plugin';

createDevApp()
  .registerPlugin(paginatedTablePlugin)
  .addPage({
    element: <PaginatedTablePage />,
    title: 'Root Page',
    path: '/paginated-table'
  })
  .render();

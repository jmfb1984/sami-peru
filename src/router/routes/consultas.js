export default [
  {
    path: '/pages/cons_come_cons_gene',
    name: 'cons_come_cons_gene',
    component: () => import('@/views/consultas/cons_come_cons_gene/Main.vue'),
    meta: {
      requiresAuth: true,
      pageTitle: 'Consulta General',
      breadcrumb: [
        {
          text: 'Consultas',
        },
        {
          text: 'Consulta General',
          active: true,
        },
      ],
    },
  },
  {
    path: '/pages/cons_come_logg_pedi',
    name: 'cons_come_logg_pedi',
    component: () => import('@/views/consultas/cons_come_logg_pedi/Main.vue'),
    meta: {
      requiresAuth: true,
      pageTitle: 'Log Pedido',
      breadcrumb: [
        {
          text: 'Consultas',
        },
        {
          text: 'Log Pedido',
          active: true,
        },
      ],
    },
  },
]

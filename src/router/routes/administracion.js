export default [
  {
    path: '/pages/admi_logg_usua',
    name: 'admi_logg_usua',
    component: () => import('@/views/administracion/admi_logg_usua/Main.vue'),
    meta: {
      requiresAuth: true,
      pageTitle: 'Log usuario',
      breadcrumb: [
        {
          text: 'Administración',
        },
        {
          text: 'Log usuario',
          active: true,
        },
      ],
    },
  },
  {
    path: '/pages/admi_perm_zona',
    name: 'admi_perm_zona',
    component: () => import('@/views/administracion/admi_perm_zona/Main.vue'),
    meta: {
      requiresAuth: true,
      pageTitle: 'Permiso zonal',
      breadcrumb: [
        {
          text: 'Administración',
        },
        {
          text: 'Permiso zonal',
          active: true,
        },
      ],
    },
  },
]

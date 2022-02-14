export default [
  {
    path: '/pages/dash_vent',
    name: 'dash_vent',
    component: () => import('@/views/dashboard/dash_vent/Main.vue'),
    meta: {
      requiresAuth: true,
      pageTitle: 'Ventas',
      breadcrumb: [
        {
          text: 'Dashboard',
        },
        {
          text: 'Ventas',
          active: true,
        },
      ],
    },
  },
  {
    path: '/pages/dash_gemm',
    name: 'dash_gemm',
    component: () => import('@/views/dashboard/dash_gemm/Main.vue'),
    meta: {
      requiresAuth: true,
      pageTitle: 'Gemmas',
      breadcrumb: [
        {
          text: 'Dashboard',
        },
        {
          text: 'Gemmas',
          active: true,
        },
      ],
    },
  },
]

export default [
  {
    path: '/pages/error-acceso',
    name: 'error-acceso',
    component: () => import('@/views/error/ErrorAcceso.vue'),
    meta: {
      layout: 'full',
      resource: 'Auth',
      action: 'read',
    },
  },
  {
    path: '/pages/error-sami',
    name: 'error-sami',
    component: () => import('@/views/error/ErrorSami.vue'),
    meta: {
      layout: 'full',
      resource: 'Auth',
      action: 'read',
    },
  },
  {
    path: '/pages/error-404',
    name: 'error-404',
    component: () => import('@/views/error/Error404.vue'),
    meta: {
      layout: 'full',
      resource: 'Auth',
      action: 'read',
    },
  },
  {
    path: '/pages/error-servicio',
    name: 'error-servicio',
    component: () => import('@/views/error/ErrorServicio.vue'),
    meta: {
      layout: 'full',
      resource: 'Auth',
      action: 'read',
    },
  },
]

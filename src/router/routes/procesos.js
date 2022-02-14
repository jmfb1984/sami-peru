export default [
  {
    path: '/pages/proc_come_prod_zona',
    name: 'proc_come_prod_zona',
    component: () => import('@/views/procesos/proc_come_prod_zona/Main.vue'),
    meta: {
      requiresAuth: true,
      pageTitle: 'Producto zona',
      breadcrumb: [
        {
          text: 'Procesos',
        },
        {
          text: 'Producto zona',
          active: true,
        },
      ],
    },
  },
  {
    path: '/pages/proc_come_posi_ases',
    name: 'proc_come_posi_ases',
    component: () => import('@/views/procesos/proc_come_posi_ases/Main.vue'),
    meta: {
      requiresAuth: true,
      pageTitle: 'Registrar posible asesora',
      breadcrumb: [
        {
          text: 'Procesos',
        },
        {
          text: 'Registrar posible asesora',
          active: true,
        },
      ],
    },
  },
  {
    path: '/pages/proc_come_asig_posi_ases',
    name: 'proc_come_asig_posi_ases',
    component: () => import('@/views/procesos/proc_come_asig_posi_ases/Main.vue'),
    meta: {
      requiresAuth: true,
      pageTitle: 'Asignar posible asesora',
      breadcrumb: [
        {
          text: 'Procesos',
        },
        {
          text: 'Asignar posible asesora',
          active: true,
        },
      ],
    },
  },
  {
    path: '/pages/proc_come_gest_posi_ases',
    name: 'proc_come_gest_posi_ases',
    component: () => import('@/views/procesos/proc_come_gest_posi_ases/Main.vue'),
    meta: {
      requiresAuth: true,
      pageTitle: 'Gestionar posible asesora',
      breadcrumb: [
        {
          text: 'Procesos',
        },
        {
          text: 'Gestionar posible asesora',
          active: true,
        },
      ],
    },
  },
  {
    path: '/pages/proc_come_fech_proy',
    name: 'proc_come_fech_proy',
    component: () => import('@/views/procesos/proc_come_fech_proy/Main.vue'),
    meta: {
      requiresAuth: true,
      pageTitle: 'Fecha proyección',
      breadcrumb: [
        {
          text: 'Procesos',
        },
        {
          text: 'Fecha proyección',
          active: true,
        },
      ],
    },
  },
  {
    path: '/pages/proc_come_conf_insc',
    name: 'proc_come_conf_insc',
    component: () => import('@/views/procesos/proc_come_conf_insc/Main.vue'),
    meta: {
      requiresAuth: true,
      pageTitle: 'Confirmar pre inscripción',
      breadcrumb: [
        {
          text: 'Procesos',
        },
        {
          text: 'Confirmar pre inscripción',
          active: true,
        },
      ],
    },
  },
  {
    path: '/pages/proc_come_carg_obje',
    name: 'proc_come_carg_obje',
    component: () => import('@/views/procesos/proc_come_carg_obje/Main.vue'),
    meta: {
      requiresAuth: true,
      pageTitle: 'Cargar objetivo',
      breadcrumb: [
        {
          text: 'Procesos',
        },
        {
          text: 'Cargar objetivo',
          active: true,
        },
      ],
    },
  },
  {
    path: '/pages/proc_come_actu_dato_simp',
    name: 'proc_come_actu_dato_simp',
    component: () => import('@/views/procesos/proc_come_actu_dato_simp/Main.vue'),
    meta: {
      requiresAuth: true,
      pageTitle: 'Actualizar dato simple',
      breadcrumb: [
        {
          text: 'Procesos',
        },
        {
          text: 'Actualizar dato simple',
          active: true,
        },
      ],
    },
  },
  {
    path: '/pages/proc_come_soli_reco',
    name: 'proc_come_soli_reco',
    component: () => import('@/views/procesos/proc_come_soli_reco/Main.vue'),
    meta: {
      requiresAuth: true,
      pageTitle: 'Solicitud recodificación',
      breadcrumb: [
        {
          text: 'Procesos',
        },
        {
          text: 'Solicitud recodificación',
          active: true,
        },
      ],
    },
  },
  {
    path: '/pages/proc_come_gest_soli_reco',
    name: 'proc_come_gest_soli_reco',
    component: () => import('@/views/procesos/proc_come_gest_soli_reco/Main.vue'),
    meta: {
      requiresAuth: true,
      pageTitle: 'Gestionar solicitud recodificación',
      breadcrumb: [
        {
          text: 'Procesos',
        },
        {
          text: 'Gestionar solicitud recodificación',
          active: true,
        },
      ],
    },
  },
  {
    path: '/pages/proc_come_desb_ases',
    name: 'proc_come_desb_ases',
    component: () => import('@/views/procesos/proc_come_desb_ases/Main.vue'),
    meta: {
      requiresAuth: true,
      pageTitle: 'Desbloquear asesora',
      breadcrumb: [
        {
          text: 'Procesos',
        },
        {
          text: 'Desbloquear asesora',
          active: true,
        },
      ],
    },
  },
  {
    path: '/pages/proc_come_abri_asis',
    name: 'proc_come_abri_asis',
    component: () => import('@/views/procesos/proc_come_abri_asis/Main.vue'),
    meta: {
      requiresAuth: true,
      pageTitle: 'Abrir asistencia',
      breadcrumb: [
        {
          text: 'Procesos',
        },
        {
          text: 'Abrir asistencia',
          active: true,
        },
      ],
    },
  },
  {
    path: '/pages/proc_come_cerr_asis',
    name: 'proc_come_cerr_asis',
    component: () => import('@/views/procesos/proc_come_cerr_asis/Main.vue'),
    meta: {
      requiresAuth: true,
      pageTitle: 'Cerrar asistencia',
      breadcrumb: [
        {
          text: 'Procesos',
        },
        {
          text: 'Cerrar asistencia',
          active: true,
        },
      ],
    },
  },
  {
    path: '/pages/proc_mapa',
    name: 'proc_mapa',
    component: () => import('@/views/procesos/proc_mapa/Main.vue'),
    meta: {
      requiresAuth: true,
      pageTitle: 'Azzorti maps',
      breadcrumb: [
        {
          text: 'Procesos',
        },
        {
          text: 'Azzorti maps',
          active: true,
        },
      ],
    },
  },
  {
    path: '/pages/proc_come_soli_vaca',
    name: 'proc_come_soli_vaca',
    component: () => import('@/views/procesos/proc_come_soli_vaca/Main.vue'),
    meta: {
      requiresAuth: true,
      pageTitle: 'Solicitud vacaciones',
      breadcrumb: [
        {
          text: 'Procesos',
        },
        {
          text: 'Solicitud vacaciones',
          active: true,
        },
      ],
    },
  },
  {
    path: '/pages/proc_come_gest_vaca',
    name: 'proc_come_gest_vaca',
    component: () => import('@/views/procesos/proc_come_gest_vaca/Main.vue'),
    meta: {
      requiresAuth: true,
      pageTitle: 'Gestionar vacaciones',
      breadcrumb: [
        {
          text: 'Procesos',
        },
        {
          text: 'Gestionar vacaciones',
          active: true,
        },
      ],
    },
  },
]

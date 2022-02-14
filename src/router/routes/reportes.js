export default [
  {
    path: '/pages/repo_come_pedi_digi',
    name: 'repo_come_pedi_digi',
    component: () => import('@/views/reportes/repo_come_pedi_digi/Main.vue'),
    meta: {
      requiresAuth: true,
      pageTitle: 'Pedido digitado zonal',
      breadcrumb: [
        {
          text: 'Reportes',
        },
        {
          text: 'Pedido digitado zonal',
          active: true,
        },
      ],
    },
  },
  {
    path: '/pages/repo_come_pedi_digi_regi',
    name: 'repo_come_pedi_digi_regi',
    component: () => import('@/views/reportes/repo_come_pedi_digi_regi/Main.vue'),
    meta: {
      requiresAuth: true,
      pageTitle: 'Pedido digitado región',
      breadcrumb: [
        {
          text: 'Reportes',
        },
        {
          text: 'Pedido digitado región',
          active: true,
        },
      ],
    },
  },
  {
    path: '/pages/repo_come_pedi_digi_pais',
    name: 'repo_come_pedi_digi_pais',
    component: () => import('@/views/reportes/repo_come_pedi_digi_pais/Main.vue'),
    meta: {
      requiresAuth: true,
      pageTitle: 'Pedido digitado país',
      breadcrumb: [
        {
          text: 'Reportes',
        },
        {
          text: 'Pedido digitado país',
          active: true,
        },
      ],
    },
  },
  {
    path: '/pages/repo_come_comp_canj_devo',
    name: 'repo_come_comp_canj_devo',
    component: () => import('@/views/reportes/repo_come_comp_canj_devo/Main.vue'),
    meta: {
      requiresAuth: true,
      pageTitle: 'Comportamiento c & d',
      breadcrumb: [
        {
          text: 'Reportes',
        },
        {
          text: 'Comportamiento c & d',
          active: true,
        },
      ],
    },
  },
  {
    path: '/pages/repo_come_cons_ases_nuev',
    name: 'repo_come_cons_ases_nuev',
    component: () => import('@/views/reportes/repo_come_cons_ases_nuev/Main.vue'),
    meta: {
      requiresAuth: true,
      pageTitle: 'Consecutividad asesora nueva',
      breadcrumb: [
        {
          text: 'Reportes',
        },
        {
          text: 'Consecutividad asesora nueva',
          active: true,
        },
      ],
    },
  },
  {
    path: '/pages/repo_come_esta_ases',
    name: 'repo_come_esta_ases',
    component: () => import('@/views/reportes/repo_come_esta_ases/Main.vue'),
    meta: {
      requiresAuth: true,
      pageTitle: 'Estado asesora',
      breadcrumb: [
        {
          text: 'Reportes',
        },
        {
          text: 'Estado asesora',
          active: true,
        },
      ],
    },
  },
  {
    path: '/pages/repo_come_sald_cart',
    name: 'repo_come_sald_cart',
    component: () => import('@/views/reportes/repo_come_sald_cart/Main.vue'),
    meta: {
      requiresAuth: true,
      pageTitle: 'Fraccionamiento',
      breadcrumb: [
        {
          text: 'Reportes',
        },
        {
          text: 'Fraccionamiento',
          active: true,
        },
      ],
    },
  },
  {
    path: '/pages/repo_come_insc',
    name: 'repo_come_insc',
    component: () => import('@/views/reportes/repo_come_insc/Main.vue'),
    meta: {
      requiresAuth: true,
      pageTitle: 'Inscripción asesora',
      breadcrumb: [
        {
          text: 'Reportes',
        },
        {
          text: 'Inscripción asesora',
          active: true,
        },
      ],
    },
  },
  {
    path: '/pages/repo_come_lide_pago',
    name: 'repo_come_lide_pago',
    component: () => import('@/views/reportes/repo_come_lide_pago/Main.vue'),
    meta: {
      requiresAuth: true,
      pageTitle: 'Lider pago',
      breadcrumb: [
        {
          text: 'Reportes',
        },
        {
          text: 'Lider pago',
          active: true,
        },
      ],
    },
  },
  {
    path: '/pages/repo_come_list_ases',
    name: 'repo_come_list_ases',
    component: () => import('@/views/reportes/repo_come_list_ases/Main.vue'),
    meta: {
      requiresAuth: true,
      pageTitle: 'Listado asesora',
      breadcrumb: [
        {
          text: 'Reportes',
        },
        {
          text: 'Listado asesora',
          active: true,
        },
      ],
    },
  },
  {
    path: '/pages/repo_come_posi_ases',
    name: 'repo_come_posi_ases',
    component: () => import('@/views/reportes/repo_come_posi_ases/Main.vue'),
    meta: {
      requiresAuth: true,
      pageTitle: 'Posible asesora',
      breadcrumb: [
        {
          text: 'Reportes',
        },
        {
          text: 'Posible asesora',
          active: true,
        },
      ],
    },
  },
  {
    path: '/pages/repo_come_refe',
    name: 'repo_come_refe',
    component: () => import('@/views/reportes/repo_come_refe/Main.vue'),
    meta: {
      requiresAuth: true,
      pageTitle: 'Referido',
      breadcrumb: [
        {
          text: 'Reportes',
        },
        {
          text: 'Referido',
          active: true,
        },
      ],
    },
  },
  {
    path: '/pages/repo_come_prep_pedi',
    name: 'repo_come_prep_pedi',
    component: () => import('@/views/reportes/repo_come_prep_pedi/Main.vue'),
    meta: {
      requiresAuth: true,
      pageTitle: 'Prepedido y pedido',
      breadcrumb: [
        {
          text: 'Reportes',
        },
        {
          text: 'Prepedido y pedido',
          active: true,
        },
      ],
    },
  },
  {
    path: '/pages/repo_come_sami_visi',
    name: 'repo_come_sami_visi',
    component: () => import('@/views/reportes/repo_come_sami_visi/Main.vue'),
    meta: {
      requiresAuth: true,
      pageTitle: 'Sami visita',
      breadcrumb: [
        {
          text: 'Reportes',
        },
        {
          text: 'Sami visita',
          active: true,
        },
      ],
    },
  },
  {
    path: '/pages/repo_come_sami_come',
    name: 'repo_come_sami_come',
    component: () => import('@/views/reportes/repo_come_sami_come/Main.vue'),
    meta: {
      requiresAuth: true,
      pageTitle: 'Sami comentario',
      breadcrumb: [
        {
          text: 'Reportes',
        },
        {
          text: 'Sami comentario',
          active: true,
        },
      ],
    },
  },
  {
    path: '/pages/repo_come_simu_cobr',
    name: 'repo_come_simu_cobr',
    component: () => import('@/views/reportes/repo_come_simu_cobr/Main.vue'),
    meta: {
      requiresAuth: true,
      pageTitle: 'Saldo cartera',
      breadcrumb: [
        {
          text: 'Reportes',
        },
        {
          text: 'Saldo cartera',
          active: true,
        },
      ],
    },
  },
  {
    path: '/pages/repo_come_prod_lide',
    name: 'repo_come_prod_lide',
    component: () => import('@/views/reportes/repo_come_prod_lide/Main.vue'),
    meta: {
      requiresAuth: true,
      pageTitle: 'Producto lider',
      breadcrumb: [
        {
          text: 'Reportes',
        },
        {
          text: 'Producto lider',
          active: true,
        },
      ],
    },
  },
  {
    path: '/pages/repo_come_proy_camp',
    name: 'repo_come_proy_camp',
    component: () => import('@/views/reportes/repo_come_proy_camp/Main.vue'),
    meta: {
      requiresAuth: true,
      pageTitle: 'Proyección campaña zona',
      breadcrumb: [
        {
          text: 'Reportes',
        },
        {
          text: 'Indicadores de gestión',
        },
        {
          text: 'Proyección campaña zona',
          active: true,
        },
      ],
    },
  },
  {
    path: '/pages/repo_come_proy_camp_regi',
    name: 'repo_come_proy_camp_regi',
    component: () => import('@/views/reportes/repo_come_proy_camp_regi/Main.vue'),
    meta: {
      requiresAuth: true,
      pageTitle: 'Proyección campaña región',
      breadcrumb: [
        {
          text: 'Reportes',
        },
        {
          text: 'Indicadores de gestión',
        },
        {
          text: 'Proyección campaña región',
          active: true,
        },
      ],
    },
  },
  {
    path: '/pages/repo_come_segu_cier_camp',
    name: 'repo_come_segu_cier_camp',
    component: () => import('@/views/reportes/repo_come_segu_cier_camp/Main.vue'),
    meta: {
      requiresAuth: true,
      pageTitle: 'Seguimiento cierre campaña zona',
      breadcrumb: [
        {
          text: 'Reportes',
        },
        {
          text: 'Indicadores de gestión',
        },
        {
          text: 'Seguimiento cierre campaña zona',
          active: true,
        },
      ],
    },
  },
  {
    path: '/pages/repo_come_eval_cier',
    name: 'repo_come_eval_cier',
    component: () => import('@/views/reportes/repo_come_eval_cier/Main.vue'),
    meta: {
      requiresAuth: true,
      pageTitle: 'Evaluación cierre campaña zona',
      breadcrumb: [
        {
          text: 'Reportes',
        },
        {
          text: 'Indicadores de gestión',
        },
        {
          text: 'Evaluación cierre campaña zona',
          active: true,
        },
      ],
    },
  },
  {
    path: '/pages/repo_come_segu_cier_camp_regi',
    name: 'repo_come_segu_cier_camp_regi',
    component: () => import('@/views/reportes/repo_come_segu_cier_camp_regi/Main.vue'),
    meta: {
      requiresAuth: true,
      pageTitle: 'Seguimiento cierre campaña región',
      breadcrumb: [
        {
          text: 'Reportes',
        },
        {
          text: 'Indicadores de gestión',
        },
        {
          text: 'Seguimiento cierre campaña región',
          active: true,
        },
      ],
    },
  },
  {
    path: '/pages/repo_come_segu_cier_camp_pais',
    name: 'repo_come_segu_cier_camp_pais',
    component: () => import('@/views/reportes/repo_come_segu_cier_camp_pais/Main.vue'),
    meta: {
      requiresAuth: true,
      pageTitle: 'Seguimiento cierre campaña país',
      breadcrumb: [
        {
          text: 'Reportes',
        },
        {
          text: 'Indicadores de gestión',
        },
        {
          text: 'Seguimiento cierre campaña país',
          active: true,
        },
      ],
    },
  },
  {
    path: '/pages/repo_come_sema_lide',
    name: 'repo_come_sema_lide',
    component: () => import('@/views/reportes/repo_come_sema_lide/Main.vue'),
    meta: {
      requiresAuth: true,
      pageTitle: 'Semáforo lider',
      breadcrumb: [
        {
          text: 'Reportes',
        },
        {
          text: 'Indicadores de gestión',
        },
        {
          text: 'Semáforo lider',
          active: true,
        },
      ],
    },
  },
  {
    path: '/pages/repo_come_sema_zona',
    name: 'repo_come_sema_zona',
    component: () => import('@/views/reportes/repo_come_sema_zona/Main.vue'),
    meta: {
      requiresAuth: true,
      pageTitle: 'Semáforo zonal',
      breadcrumb: [
        {
          text: 'Reportes',
        },
        {
          text: 'Indicadores de gestión',
        },
        {
          text: 'Semáforo zonal',
          active: true,
        },
      ],
    },
  },
  {
    path: '/pages/repo_come_soli_reco',
    name: 'repo_come_soli_reco',
    component: () => import('@/views/reportes/repo_come_soli_reco/Main.vue'),
    meta: {
      requiresAuth: true,
      pageTitle: 'Solicitud recodificación',
      breadcrumb: [
        {
          text: 'Reportes',
        },
        {
          text: 'Solicitud recodificación',
          active: true,
        },
      ],
    },
  },
  {
    path: '/pages/repo_come_cicl_pedi',
    name: 'repo_come_cicl_pedi',
    component: () => import('@/views/reportes/repo_come_cicl_pedi/Main.vue'),
    meta: {
      requiresAuth: true,
      pageTitle: 'Ciclo pedido',
      breadcrumb: [
        {
          text: 'Reportes',
        },
        {
          text: 'Ciclo pedido',
          active: true,
        },
      ],
    },
  },
  {
    path: '/pages/repo_come_dire_lide',
    name: 'repo_come_dire_lide',
    component: () => import('@/views/reportes/repo_come_dire_lide/Main.vue'),
    meta: {
      requiresAuth: true,
      pageTitle: 'Directorio líder',
      breadcrumb: [
        {
          text: 'Reportes',
        },
        {
          text: 'Directorio líder',
          active: true,
        },
      ],
    },
  },
  {
    path: '/pages/repo_come_asis_conf',
    name: 'repo_come_asis_conf',
    component: () => import('@/views/reportes/repo_come_asis_conf/Main.vue'),
    meta: {
      requiresAuth: true,
      pageTitle: 'Asistencia conferencia',
      breadcrumb: [
        {
          text: 'Reportes',
        },
        {
          text: 'Asistencia conferencia',
          active: true,
        },
      ],
    },
  },
  {
    path: '/pages/repo_come_segm_ases',
    name: 'repo_come_segm_ases',
    component: () => import('@/views/reportes/repo_come_segm_ases/Main.vue'),
    meta: {
      requiresAuth: true,
      pageTitle: 'Segmentación asesora',
      breadcrumb: [
        {
          text: 'Reportes',
        },
        {
          text: 'Segmentación asesora',
          active: true,
        },
      ],
    },
  },
  {
    path: '/pages/repo_come_gemm',
    name: 'repo_come_gemm',
    component: () => import('@/views/reportes/repo_come_gemm/Main.vue'),
    meta: {
      requiresAuth: true,
      pageTitle: 'Gemmas',
      breadcrumb: [
        {
          text: 'Reportes',
        },
        {
          text: 'Gemmas',
          active: true,
        },
      ],
    },
  },
  {
    path: '/pages/repo_come_soli_vaca',
    name: 'repo_come_soli_vaca',
    component: () => import('@/views/reportes/repo_come_soli_vaca/Main.vue'),
    meta: {
      requiresAuth: true,
      pageTitle: 'Solicitud vacaciones',
      breadcrumb: [
        {
          text: 'Reportes',
        },
        {
          text: 'Vacaciones',
        },
        {
          text: 'Solicitud',
          active: true,
        },
      ],
    },
  },
  {
    path: '/pages/repo_come_vaca_pend',
    name: 'repo_come_vaca_pend',
    component: () => import('@/views/reportes/repo_come_vaca_pend/Main.vue'),
    meta: {
      requiresAuth: true,
      pageTitle: 'Vacaciones pendientes',
      breadcrumb: [
        {
          text: 'Reportes',
        },
        {
          text: 'Vacaciones',
        },
        {
          text: 'Pendientes',
          active: true,
        },
      ],
    },
  },
]

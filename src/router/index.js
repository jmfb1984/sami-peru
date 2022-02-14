import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@/auth/login'
// Routes
import error from './routes/error'
import procesos from './routes/procesos'
import dashboard from './routes/dashboard'
import reportes from './routes/reportes'
import administracion from './routes/administracion'
import consultas from './routes/consultas'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    { path: '/', redirect: { name: 'inicio' } },
    ...error,
    ...procesos,
    ...reportes,
    ...administracion,
    ...consultas,
    ...dashboard,
    {
      path: '/pages/login',
      name: 'login',
      component: () => import('@/views/pages/Login.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/pages/recuperar-contrasena',
      name: 'recuperar-contrasena',
      component: () => import('@/views/pages/OlvidoPassword.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/asistencia',
      name: 'asistencia',
      component: () => import('@/views/pages/Asistencia.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/pages/main',
      name: 'inicio',
      component: () => import('@/views/pages/main/Main.vue'),
      meta: {
        no_scroll: false,
        requiresAuth: true,
      },
    },
    {
      path: '*',
      redirect: '/pages/error-404',
    },
  ],
})

router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAuth) {
    if (!router.app.$session.exists()) {
      next({ path: '/pages/login' })
    } else {
      const x = await login.validarAccesos()
      if (x === 0) {
        next()
      } else if (x === 1) {
        next({ path: '/pages/login' })
      } else if (x === 2) {
        next({ path: '/pages/error-sami' })
      } else if (x === 3) {
        next({ path: '/pages/error-acceso' })
      } else {
        next({ path: '/pages/error-servicio' })
      }
    }
  } else {
    next()
  }
})
router.afterEach(() => {
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})
export default router

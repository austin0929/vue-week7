import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/dashboard/AdminView.vue'),
      children: [
        {
          path: 'adminproducts',
          name: 'adminproducts',
          component: () => import('../views/dashboard/AdminProductsView.vue'),
        },
        {
          path: 'order',
          name: 'order',
          component: () => import('../views/dashboard/AdminOrderView.vue'),
        },
        {
          path: 'coupon',
          name: 'coupon',
          component: () => import('../views/dashboard/CouponView.vue'),
        }
      ]
    },
  ]
})

export default router

import Vue from "vue"
import VueRouter from "vue-router"
import Layout from "@/layout";
import EmptyLayout from "@/layout/EmptyLayout";

Vue.use(VueRouter)

export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/pages/login/index"),
    hidden: true,
  },
  {
    path: "/redirect",
    component: Layout,
    hidden: true,
    children: [
      {
        path: "/redirect/:path(.*)",
        component: () => import("@/pages/redirect/index"),
      },
    ],
  },
  {
    path: "/",
    component: Layout,
    redirect: "/index",
    children: [
      {
        path: "/index",
        name: "Index",
        component: () => import("@/pages/index/index"),
        meta: {
          title: "首页",
          icon: "home",
          affix: true,
        },
      },
    ],
  }, {
    path: "/error",
    component: EmptyLayout,
    redirect: "noRedirect",
    name: "Error",
    meta: { title: "错误页", icon: "warning" },
    children: [
      {
        path: "/403",
        name: "403",
        component: () => import("@/pages/error/403"),
        meta: { title: "403" },
      },
      {
        path: "/404",
        name: "404",
        component: () => import("@/pages/error/404"),
        meta: { title: "404" },
      }, {
        path: "/500",
        name: "500",
        component: () => import("@/pages/error/500"),
        meta: { title: "500" },
      }
    ],
  },
  {
    path: "*",
    redirect: "/404",
    hidden: true,
  }
];
export const asyncRoutes = [
  {
    path: "/",
    component: Layout,
    redirect: "/index",
    children: [
      {
        path: "/index",
        name: "Index",
        component: () => import("@/pages/index/index"),
        meta: {
          title: "首页",
          icon: "home",
          affix: true,
        },
      },
    ],
  },
  {
    path: "*",
    redirect: "/404",
    hidden: true,
  },
];


const router = new VueRouter({
  mode: "history",
  scrollBehavior: () => ({
    y: 0,
  }),
  routes: constantRoutes,
});

export default router

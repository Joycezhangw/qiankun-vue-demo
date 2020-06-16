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
    path: "/about",
    component: Layout,
    redirect: "noRedirect",
    name: "About",
    meta: { title: "关于我们", icon: "copyright" },
    children: [
      {
        path: "/himall",
        name: "himall",
        component: () => import("@/pages/about/index"),
        meta: { title: "关于himall" },
      },
      {
        path: "/aboutf",
        name: "aboutf",
        component: () => import("@/pages/about/about"),
        meta: { title: "about" },
      }
    ]
  }, {
    path: "/subapp-test",//测试子应用路由
    component: Layout,
    redirect: "noRedirect",
    name: "subapp-test",
    meta: { title: "qiankun子应用", icon: "copyright", isMicrApp: true, },
    children: [
      {
        path: "/subapp-test/index",
        name: "subapp-test",
        meta: { title: "首页", isMicrApp: true, },
      },
      {
        path: "/subapp-test/about",
        name: "subapp-test",
        meta: { title: "关于我们", isMicrApp: true, },
      }
    ]
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
  base: process.env.BASE_URL,
  scrollBehavior: () => ({
    y: 0,
  }),
  routes: constantRoutes,
});

/**
 *
 * 从子项目页面跳转到主项目自身的页面时，主项目页面的 css 未加载的 bug
 * 产生这个问题的原因是：在子项目跳转到父项目时，子项目的卸载需要一点点的时间，在这段时间内，父项目加载了，插入了 css，但是被子项目的 css 沙箱记录了，然后被移除了。
 * 父项目的事件监听也是一样的，所以需要在子项目卸载完成之后再跳转。
 *
 * 临时解决办法：先复制一下 HTMLHeadElement.prototype.appendChild 和 window.addEventListener ，
 * 路由钩子函数 beforeEach 中判断一下，如果当前路由是子项目，并且去的路由是父项目的，则还原这两个对象.
 */
const childRoute = ['/subapp-test'];
const isChildRoute = path => childRoute.some(item => path.startsWith(item))
const rawAppendChild = HTMLHeadElement.prototype.appendChild;
const rawAddEventListener = window.addEventListener;
router.beforeEach((to, from, next) => {
  // 从子项目跳转到主项目
  if (isChildRoute(from.path) && !isChildRoute(to.path)) {
    HTMLHeadElement.prototype.appendChild = rawAppendChild;
    window.addEventListener = rawAddEventListener;
  }
  next();
});
export default router

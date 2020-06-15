<template>
  <main class="app-main-container">
    <!-- 主应用渲染区，用于挂载主应用路由触发的组件 -->
    <transition name="fade-transform" mode="out-in">
      <!-- <keep-alive :include="cachedRoutes" :max="10"> -->
      <!-- <router-view :key="key" style="min-height: 80.6vh;" /> -->
      <!-- </keep-  alive> -->
      <router-view style="min-height:90.6vh" />
    </transition>
    <!-- 子应用渲染区，用于挂载子应用节点 -->
    <transition name="fade-transform" mode="out-in">
      <div id="subapp-viewport" style="min-height:90.6vh" v-show="$route.meta.isMicrApp"></div>
    </transition>
    <footer class="footer-copyright">
      Copyright
      <svg-icon icon-name="copyright" />
      {{ fullYear }} {{ copyright }}
    </footer>
  </main>
</template>
<script>
import { copyright } from "@/config/settings";
export default {
  name: "AppMain",
  data() {
    return {
      nodeEnv: process.env.NODE_ENV,
      fullYear: new Date().getFullYear(),
      copyright
    };
  }
};
</script>

<style lang="less" scoped>
.app-main-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 24px;

  .footer-copyright {
    min-height: 55px;
    line-height: 55px;
    color: rgba(0, 0, 0, 0.45);
    text-align: center;
    border-top: 1px dashed #ccc;
  }
}
</style>
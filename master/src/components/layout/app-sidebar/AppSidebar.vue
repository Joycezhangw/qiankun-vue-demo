<template>
  <aside class="app-sidebar" :class="computedClass">
    <div class="app-sidebar__content">
      <div class="sider-menu-logo" id="logo">
        <router-link to="/">
          <img src="https://preview.pro.ant.design/static/logo.f0355d39.svg" alt="logo" />
          <transition name="sidebarLogoFade">
            <h1 v-if="!minimized">{{appTitle}}</h1>
          </transition>
        </router-link>
      </div>
      <div class="sidebar-container">
        <el-scrollbar>
          <el-menu
            :default-active="activeMenu"
            :collapse="isCollapse"
            :background-color="variables.menuBg"
            :text-color="variables.menuText"
            :unique-opened="false"
            :active-text-color="variables.menuActiveText"
            :collapse-transition="false"
            mode="vertical"
          >
            <sidebar-item
              v-for="route in routes"
              :key="route.path"
              :item="route"
              :base-path="route.path"
            />
          </el-menu>
        </el-scrollbar>
      </div>
    </div>
  </aside>
</template>
<script>
import SidebarItem from "./SidebarItem";
export default {
  name: "AppSidebar",
  components: { SidebarItem },
  props: {
    minimized: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      appTitle: process.env.VUE_APP_TITLE,
      variables: {
        menuText: "#bfcbd9",
        menuActiveText: "#409EFF",
        subMenuActiveText: "#f4f4f5",
        menuBg: "#001529",
        menuHover: "#263445",
        subMenuBg: "#000c17",
        subMenuHover: "#001528",
        sideBarWidth: "210PX"
      }
    };
  },
  computed: {
    computedClass() {
      return {
        "app-sidebar--minimized": this.minimized
      };
    },
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
    routes() {
      return this.$router.options.routes;
    },
    isCollapse() {
      return this.minimized;
    }
  }
};
</script>
<style lang="less">
.app-sidebar {
  position: relative;
  background: #001529;
  transition: all 0.2s;
  overflow: hidden;
  z-index: 10;
  min-height: 100%;
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
  flex: 0 0 220px;
  max-width: 220px;
  min-width: 220px;
  width: 220px;
  &__content {
    height: 100%;
    margin-top: -0.1px;
    padding-top: 0.1px;
    overflow: hidden;
    .sidebar-container {
      padding: 0 10px;
    }
    .el-menu {
      border: none;
      height: 100%;
      width: 100% !important;
    }
    .svg-icon {
      margin-right: 16px;
    }
    /** 需要隐藏掉，不然侧边栏又白边 */
    .el-scrollbar__wrap {
      overflow: hidden !important;
      width: 100%;
    }
    .sider-menu-logo {
      position: relative;
      padding: 0 24px;
      overflow: hidden;
      background: #001529;
      cursor: pointer;
      transition: all 0.3s;
      & > a {
        display: flex;
        align-items: center;
        height: 64px;
      }
      & h1 {
        display: inline-block;
        margin: 0 0 0 12px;
        color: #fff;
        font-weight: 600;
        font-size: 16px;
        vertical-align: middle;
        animation: fade-in;
        animation-duration: 0.3s;
        overflow: hidden;
      }
      & img {
        display: inline-block;
        height: 32px;
        vertical-align: middle;
      }
    }
  }
  &--minimized {
    flex: 0 0 80px;
    max-width: 80px;
    min-width: 80px;
    width: 80px;
    /** 折叠侧边栏，隐藏掉一级菜单的文字和向上向下的图标 */
    .el-submenu > .el-submenu__title > span {
      height: 0;
      width: 0;
      overflow: hidden;
      visibility: hidden;
      display: inline-block;
    }
    .el-submenu > .el-submenu__title .el-submenu__icon-arrow {
      display: none;
    }
  }
}
.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}
</style>
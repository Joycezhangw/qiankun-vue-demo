<template>
  <header class="app-header" :class="[!minimized?'fix-header':'fix-min-header']">
    <div class="left-panel">
      <span
        class="app-header__trigger"
        @click="$emit('update:minimized', !minimized)"
        :title="minimized ? '展开' : '收起'"
      >
        <span role="img" class="anticon" v-if="!minimized">
          <svg-icon icon-name="menu-fold" class-name="menu-fold" />
        </span>
        <span role="img" class="anticon" v-if="minimized">
          <svg-icon icon-name="menu-unfold" class-name="menu-fold" />
        </span>
      </span>
      <breadcrumb />
    </div>
    <div style="flex: 1 1 0%;"></div>
    <div class="app-header__right">
      <el-dropdown class="avatar-container" trigger="click">
        <span class="app-header__right--action">
          <el-avatar
            class="app-header__right--avatar"
            src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
          ></el-avatar>
          <span class="app-header__right--name">HiMall</span>
          <i class="el-icon-caret-bottom" />
        </span>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <router-link to="/">
            <el-dropdown-item>个人中心</el-dropdown-item>
          </router-link>
          <a target="_blank" href="https://gitee.com/joycezhang/hmall-micro/tree/master">
            <el-dropdown-item>Gitee</el-dropdown-item>
          </a>
          <el-dropdown-item divided @click.native="logout">
            <span style="display:block;">
              <i class="el-icon-switch-button"></i>退出登录
            </span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>
<script>
import Breadcrumb from "@/components/Breadcrumb";
export default {
  name: "AppHeader",
  components: {
    Breadcrumb
  },
  props: {
    minimized: {
      type: Boolean,
      required: true
    }
  }
};
</script>
<style lang="less">
.app-header {
  position: relative;
  display: flex;
  align-items: center;
  height: @layout-header-height;
  padding: 0;
  color: rgba(0, 0, 0, 0.65);
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  .menu-fold {
    width: 1em;
    height: 1em;
  }
  .left-panel {
    display: flex;
    align-items: center;
    justify-items: center;
    height: @layout-header-height;
    max-height: @layout-header-height;
  }
  &__trigger {
    height: @layout-header-height;
    line-height: 56px;
    padding: 0 24px;
    font-size: 20px;
    cursor: pointer;
    transition: all 0.3s, padding 0s;
    .anticon {
      display: inline-block;
      color: inherit;
      font-style: normal;
      line-height: 0;
      text-align: center;
      text-transform: none;
      vertical-align: -0.125em;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  }
  &__right {
    display: flex;
    float: right;
    height: 64px;
    margin-left: auto;
    overflow: hidden;
    &--action {
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0 12px;
      cursor: pointer;
      transition: all 0.3s;
    }
    &--avatar {
      margin: 20px 8px 20px 0;
      color: #1890ff;
      vertical-align: top;
      background: hsla(0, 0%, 100%, 0.85);
    }
    &--name {
      color: rgba(0, 0, 0, 0.65);
      vertical-align: middle;
    }
  }
  &.fix-header,
  &.fix-min-header {
    position: fixed;
    top: 0;
    padding: 0px;
    z-index: 9;
    right: 0px;
  }
  &.fix-header {
    width: calc(100% - @layout-sidebar-width);
  }
  &.fix-min-header {
    width: calc(100% - @layout-sidebar-min-width);
  }
}
</style>
<template>
  <div id="root" class="main-container">
    <div class="app-layout app-layout-has-sider" :class="[!minimized?'basicLayout-fix-siderbar':'']">
      <app-sidebar :minimized.sync="minimized" />
      <section class="content-wrap">
        <header class="app-header"></header>
        <app-header :minimized.sync="minimized" />
        <app-main />
      </section>
    </div>
  </div>
</template>
<script>
import { AppMain, AppHeader, AppSidebar } from "./components";
export default {
  name: "Layout",
  components: {
    AppMain,
    AppSidebar,
    AppHeader
  },
  data() {
    return {
      minimized: false
    };
  }
};
</script>

<style lang="less">
@import url("../styles/global.less");
.main-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
}
.app-layout,
.app-layout * {
  box-sizing: border-box;
}
.app-layout {
  display: flex;
  flex: auto;
  flex-direction: column;
  min-height: 0;
  background: #f0f2f5;

  &.app-layout-has-sider {
    flex-direction: row;
  }
  .content-wrap {
    display: flex;
    flex: auto;
    flex-direction: column;
    min-height: 0;
    background: #f0f2f5;
    padding-left: @layout-sidebar-min-width;
  }
}
.basicLayout-fix-siderbar {
  .content-wrap {
    padding-left:@layout-sidebar-width;
  }
}
</style>

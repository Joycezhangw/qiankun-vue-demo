<template>
  <div class="app-result app-result-404">
    <div class="app-result-icon app-result-image">
      <svg-icon icon-name="404-page" class-name="error-404" />
    </div>
    <div class="app-result-title">404</div>
    <div class="app-result-subtitle">抱歉，您访问的页面不存在。</div>
    <div class="app-result-extra">
      <a href="/">
        <el-button type="primary">返回首页</el-button>
      </a>
    </div>
  </div>
</template>
<style scoped>
.error-404 {
  width: 252px;
  height: 294px;
}
</style>
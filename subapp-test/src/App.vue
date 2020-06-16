<template>
  <div id="app">
    <div id="nav">
      <router-link to="/index">首页</router-link>
      |
      <router-link to="/about">关于子应用</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style >
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding-bottom: 20px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

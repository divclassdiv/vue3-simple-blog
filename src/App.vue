<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app-container">
    <!-- 顶部导航栏 -->
    <header class="header">
      <div class="nav-wrapper">
        <h2 class="blog-title">个人博客</h2>
        <nav class="nav">
          <RouterLink to="/home">首页</RouterLink>
        </nav>
      </div>
    </header>

    <!-- 路由页面渲染出口 -->
    <main class="main">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  border-bottom: 1px solid #e5e7eb;
  background: #fff;
  position: sticky;
  top: 0;
  z-index: 10;
}

.nav-wrapper {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.blog-title {
  margin: 0;
  font-size: 18px;
  color: #333;
}

.nav {
  display: flex;
  gap: 20px;
}

.nav a {
  color: #666;
  text-decoration: none;
  font-size: 14px;
}

.nav a.router-link-exact-active {
  color: #42b883;
}

.main {
  flex: 1;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding: 30px 20px;
  box-sizing: border-box;
}

/* 响应式适配 */
@media (max-width: 768px) {
  .nav-wrapper {
    padding: 0 15px;
  }
  .main {
    padding: 20px 15px;
  }
}
</style>

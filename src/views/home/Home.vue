<template>
  <div class="home-container">
    <header class="home-header">
      <nav class="navbar">
        <div class="nav-brand">
          <img src="../../assets/logo.svg" alt="Vue Logo" class="nav-logo"/>
          <span>Vue 3 管理系统</span>
        </div>
        <div class="nav-menu">
          <a href="#" class="menu-item">首页</a>
          <a href="#" class="menu-item">B2C</a>
          <a href="#" class="menu-item">B2B</a>
        </div>
        <div class="nav-links">
          <button @click="handleLogout" class="logout-btn">退出登录</button>
        </div>
      </nav>
    </header>

    <main class="home-main">
      <div class="welcome-section">
        <h1>欢迎使用 Vue 3 管理系统</h1>
        <p>您已成功登录！这是一个基于 Vue 3 的现代化管理系统。</p>

        <div class="feature-cards">
          <div class="card">
            <div class="card-icon">📊</div>
            <h3>数据统计</h3>
            <p>实时数据监控和分析</p>
          </div>

          <div class="card">
            <div class="card-icon">👥</div>
            <h3>用户管理</h3>
            <p>完善的用户权限控制</p>
          </div>

          <div class="card">
            <div class="card-icon">⚙️</div>
            <h3>系统设置</h3>
            <p>灵活的系统配置选项</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import {useRouter} from 'vue-router'
import './home.css'

const router = useRouter()

const handleLogout = () => {
  // 清除登录状态
  localStorage.removeItem('token')
  localStorage.removeItem('userInfo')

  // 跳转到登录页
  router.push('/login')
}
</script>

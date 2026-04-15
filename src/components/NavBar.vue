<template>
  <header class="home-header">
    <nav class="navbar">
      <div class="nav-brand">
        <img src="../assets/logo.svg" alt="Vue Logo" class="nav-logo"/>
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
</template>

<script setup>
import {useRouter} from 'vue-router'
import "./NavBar.css"

const router = useRouter()

const handleLogout = () => {
  // 清除登录状态
  localStorage.removeItem('token')
  localStorage.removeItem('userInfo')

  // 跳转到登录页
  router.push('/login')
}
</script>

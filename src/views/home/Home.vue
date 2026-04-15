<template>
  <div class="home-container">
    <NavBar/>

    <div class="home-layout">
      <Sidebar @menu-click="handleMenuClick"/>

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
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import Sidebar from '@/components/Sidebar.vue'
import './Home.css'

const handleMenuClick = (menuItem) => {
  console.log('菜单点击:', menuItem)
}
</script>

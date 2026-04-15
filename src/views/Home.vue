<template>
  <div class="home-container">
    <header class="home-header">
      <nav class="navbar">
        <div class="nav-brand">
          <img src="@/assets/logo.svg" alt="Vue Logo" class="nav-logo"/>
          <span>Vue 3 管理系统</span>
        </div>
        <div class="nav-links">
          <a href="#" class="nav-link">首页</a>
          <a href="#" class="nav-link">关于</a>
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

const router = useRouter()

const handleLogout = () => {
  // 清除登录状态
  localStorage.removeItem('token')
  localStorage.removeItem('userInfo')

  // 跳转到登录页
  router.push('/login')
}
</script>

<style scoped>
.home-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.home-header {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.navbar {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.5rem;
  font-weight: 700;
  color: #667eea;
}

.nav-logo {
  width: 40px;
  height: 40px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  color: #333;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #667eea;
}

.logout-btn {
  padding: 0.5rem 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.logout-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.home-main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
}

.welcome-section {
  text-align: center;
  color: white;
}

.welcome-section h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.welcome-section p {
  font-size: 1.2rem;
  margin-bottom: 3rem;
  opacity: 0.9;
}

.feature-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.card {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  color: #333;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.card h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #667eea;
}

.card p {
  color: #666;
  font-size: 1rem;
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    gap: 1rem;
  }

  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }

  .welcome-section h1 {
    font-size: 2rem;
  }

  .feature-cards {
    grid-template-columns: 1fr;
  }
}
</style>

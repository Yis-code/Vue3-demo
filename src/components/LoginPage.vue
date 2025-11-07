<template>
  <div class="login-container">
    <!-- PC端大屏左侧介绍区域 -->
    <div class="login-sidebar" v-if="isLargeScreen">
      <div class="sidebar-content">
        <img src="@/assets/logo.svg" alt="Vue Logo" class="sidebar-logo" />
        <h2>Vue 3 管理系统</h2>
        <p>现代化的前端框架，构建高效的用户界面</p>
        <div class="feature-list">
          <div class="feature-item">
            <span class="feature-icon">⚡</span>
            <span>极速响应</span>
          </div>
          <div class="feature-item">
            <span class="feature-icon">🔒</span>
            <span>安全可靠</span>
          </div>
          <div class="feature-item">
            <span class="feature-icon">📱</span>
            <span>多端适配</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 登录表单区域 -->
    <div class="login-main">
      <div class="login-card">
        <div class="logo-section">
          <img src="@/assets/logo.svg" alt="Vue Logo" class="logo" />
          <h1>欢迎回来</h1>
          <p>请登录您的账户</p>
        </div>
        
        <form @submit.prevent="handleLogin" class="login-form">
          <div class="form-group">
            <label for="email">邮箱地址</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              placeholder="请输入您的邮箱"
              required
              class="form-input"
            />
          </div>
          
          <div class="form-group">
            <label for="password">密码</label>
            <input
              id="password"
              v-model="form.password"
              type="password"
              placeholder="请输入您的密码"
              required
              class="form-input"
            />
          </div>
          
          <div class="form-options">
            <label class="checkbox-label">
              <input type="checkbox" v-model="form.rememberMe" />
              <span>记住我</span>
            </label>
            <a href="#" class="forgot-password">忘记密码？</a>
          </div>
          
          <button type="submit" class="login-button" :disabled="isLoading">
            {{ isLoading ? '登录中...' : '登录' }}
          </button>
        </form>
        
        <div class="divider">
          <span>或者</span>
        </div>
        
        <div class="social-login">
          <button class="social-button google">
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            使用 Google 登录
          </button>
          
          <button class="social-button github">
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path fill="#333" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            使用 GitHub 登录
          </button>
        </div>
        
        <div class="signup-link">
          还没有账户？ <a href="#">立即注册</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const form = ref({
  email: '',
  password: '',
  rememberMe: false
})

const isLoading = ref(false)
const isLargeScreen = ref(false)

// 检测屏幕尺寸
const checkScreenSize = () => {
  isLargeScreen.value = window.innerWidth >= 1024
}

// 监听窗口大小变化
onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize)
})

const handleLogin = async () => {
  isLoading.value = true
  
  // 模拟登录请求
  setTimeout(() => {
    console.log('登录信息:', form.value)
    alert('登录成功！')
    isLoading.value = false
  }, 1500)
}
</script>

<style scoped>
/* 基础重置和比例设置 */
* {
  box-sizing: border-box;
}

.login-container {
  height: 100vh; /* 改为固定高度而不是最小高度 */
  display: flex;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  /* 确保容器占满整个视口 */
  width: 100vw;
  margin: 0;
  padding: 0;
  overflow: hidden; /* 完全隐藏滚动 */
}

/* PC端左侧边栏 */
.login-sidebar {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(20px, 3vw, 40px);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  height: 100vh; /* 改为固定高度 */
  overflow-y: auto; /* 如果内容过多，允许内部滚动 */
}

.sidebar-content {
  text-align: center;
  color: white;
  max-width: 400px;
}

.sidebar-logo {
  width: clamp(80px, 8vw, 120px);
  height: clamp(80px, 8vw, 120px);
  margin-bottom: clamp(20px, 3vw, 32px);
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
}

.sidebar-content h2 {
  font-size: clamp(24px, 3vw, 36px);
  font-weight: 700;
  margin-bottom: clamp(12px, 2vw, 16px);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  line-height: 1.2;
}

.sidebar-content p {
  font-size: 18px;
  margin-bottom: 40px;
  opacity: 0.9;
  line-height: 1.6;
}

.feature-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 16px;
  font-weight: 500;
}

.feature-icon {
  font-size: 20px;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
}

/* 登录主区域 */
.login-main {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(16px, 2vw, 40px); /* 减少内边距 */
  height: 100vh; /* 改为固定高度 */
  overflow-y: auto; /* 如果内容过多，允许内部滚动 */
}

.login-card {
  background: white;
  border-radius: clamp(16px, 2vw, 24px); /* 更小的圆角 */
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1); /* 更小的阴影 */
  padding: clamp(16px, 3vw, 32px); /* 减少内边距 */
  width: 100%;
  max-width: min(420px, 85vw); /* 减小最大宽度和视口占比 */
  text-align: center;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  /* 确保卡片不会超出视口 */
  margin: 0 auto;
  box-sizing: border-box;
  max-height: 90vh; /* 限制最大高度为视口的90% */
  overflow-y: auto; /* 如果内容过多，允许内部滚动 */
}

.logo-section {
  margin-bottom: clamp(20px, 3vw, 32px); /* 减少logo区域间距 */
}

.logo {
  width: clamp(60px, 6vw, 80px);
  height: clamp(60px, 6vw, 80px);
  margin-bottom: clamp(16px, 2vw, 24px);
}

.logo-section h1 {
  font-size: clamp(24px, 3vw, 32px);
  font-weight: 700;
  color: #333;
  margin: 0 0 clamp(8px, 1.5vw, 12px) 0;
  line-height: 1.2;
}

.logo-section p {
  color: #666;
  font-size: 18px;
  margin: 0;
  opacity: 0.8;
}

.login-form {
  margin-bottom: clamp(16px, 2vw, 24px); /* 减少表单底部间距 */
}

.form-group {
  margin-bottom: clamp(12px, 1.5vw, 20px); /* 减少表单项间距 */
  text-align: left;
}

.form-group label {
  display: block;
  margin-bottom: clamp(6px, 1vw, 8px); /* 减少标签底部间距 */
  font-weight: 600;
  color: #333;
  font-size: clamp(14px, 1.5vw, 16px); /* 响应式字体大小 */
}

.form-input {
  width: 100%;
  padding: clamp(10px, 1.5vw, 14px) clamp(12px, 2vw, 16px); /* 减少输入框内边距 */
  border: 2px solid #e1e8ed;
  border-radius: clamp(8px, 1.5vw, 10px); /* 更小的圆角 */
  font-size: clamp(14px, 1.5vw, 16px); /* 响应式字体大小 */
  transition: all 0.3s ease;
  box-sizing: border-box;
  background: #f8fafc;
  line-height: 1.2; /* 减少行高 */
}

.form-input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
  background: white;
}

.form-input::placeholder {
  color: #9ca3af;
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: clamp(12px, 2vw, 20px); /* 减少选项区域间距 */
  font-size: clamp(12px, 1.5vw, 14px); /* 更小的字体 */
}

.checkbox-label {
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #666;
  font-weight: 500;
}

.checkbox-label input[type="checkbox"] {
  margin-right: 10px;
  cursor: pointer;
  width: 18px;
  height: 18px;
}

.forgot-password {
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.forgot-password:hover {
  color: #5a67d8;
  text-decoration: underline;
}

.login-button {
  width: 100%;
  padding: clamp(10px, 1.5vw, 12px); /* 减少按钮内边距 */
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: clamp(8px, 1.5vw, 10px); /* 更小的圆角 */
  font-size: clamp(14px, 1.8vw, 16px); /* 更小的字体 */
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: clamp(12px, 2vw, 18px); /* 减少按钮底部间距 */
  box-shadow: 0 3px 10px rgba(102, 126, 234, 0.3);
  line-height: 1.2; /* 减少行高 */
}

.login-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
}

.login-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

.divider {
  position: relative;
  margin: clamp(16px, 2vw, 24px) 0; /* 减少分割线上下间距 */
  text-align: center;
}

.divider::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background: #e1e8ed;
}

.divider span {
  position: relative;
  background: white;
  padding: 0 20px;
  color: #666;
  font-size: 15px;
  font-weight: 500;
}

.social-login {
  display: flex;
  flex-direction: column;
  gap: clamp(8px, 1.5vw, 12px); /* 减少社交登录按钮间距 */
  margin-bottom: clamp(12px, 2vw, 20px); /* 减少底部间距 */
}

.social-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(8px, 1vw, 10px); /* 减少图标和文字间距 */
  padding: clamp(8px, 1.5vw, 12px) clamp(10px, 2vw, 14px); /* 减少按钮内边距 */
  border: 1px solid #e1e8ed; /* 更细的边框 */
  border-radius: clamp(6px, 1vw, 8px); /* 更小的圆角 */
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: clamp(12px, 1.5vw, 14px); /* 更小的字体 */
  font-weight: 600;
  color: #333;
  line-height: 1.2; /* 减少行高 */
}

.social-button:hover {
  border-color: #667eea;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.signup-link {
  color: #666;
  font-size: clamp(12px, 1.5vw, 14px); /* 更小的字体 */
  font-weight: 500;
}

.signup-link a {
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.signup-link a:hover {
  color: #5a67d8;
  text-decoration: underline;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .login-container {
    padding: 20px;
  }
  
  .login-main {
    padding: 20px;
  }
  
  .login-card {
    padding: 32px;
    max-width: 400px;
  }
}

@media (max-width: 768px) {
  .login-container {
    flex-direction: column;
    height: 100vh; /* 确保移动端也使用固定高度 */
  }
  
  .login-sidebar {
    display: none !important;
  }
  
  .login-main {
    padding: clamp(10px, 2vw, 20px); /* 更小的内边距 */
    height: 100vh; /* 改为固定高度 */
    min-height: auto;
  }
  
  .login-card {
    padding: clamp(12px, 3vw, 20px); /* 更紧凑的内边距 */
    border-radius: clamp(12px, 2vw, 16px); /* 更小的圆角 */
    max-height: 95vh; /* 稍微增加高度占比 */
  }
  
  .logo-section h1 {
    font-size: clamp(20px, 4vw, 24px); /* 更小的标题 */
  }
  
  .logo-section p {
    font-size: clamp(12px, 2vw, 14px); /* 更小的副标题 */
  }
}

@media (max-width: 480px) {
  .login-card {
    padding: 20px;
  }
  
  .logo-section h1 {
    font-size: 24px;
  }
  
  .form-group label {
    font-size: 14px;
  }
  
  .login-button {
    font-size: 16px;
    padding: 14px;
  }
}
</style>
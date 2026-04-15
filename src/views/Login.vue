<template>
  <div class="login-container">
    <!-- PC端大屏左侧介绍区域 -->
    <div class="login-sidebar" v-if="isLargeScreen">
      <div class="sidebar-content">
        <img src="../assets/logo.svg" alt="Vue Logo" class="sidebar-logo"/>
        <h2 @click="click">Vue 3 管理系统</h2>
        <h1> {{ count }}</h1>
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
          <img src="../assets/logo.svg" alt="Vue Logo" class="logo"/>
          <h1>欢迎回来</h1>
          <p>请登录您的账户</p>
        </div>

        <!-- 登录方式切换 -->
        <div class="login-tabs">
          <button
              :class="['tab-btn', { active: loginType === 'phone' }]"
              @click="loginType = 'phone'"
          >
            手机登录
          </button>
          <button
              :class="['tab-btn', { active: loginType === 'email' }]"
              @click="loginType = 'email'"
          >
            邮箱登录
          </button>
        </div>

        <form @submit.prevent="handleLogin" class="login-form">
          <!-- 邮箱登录表单 -->
          <template v-if="loginType === 'email'">
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
          </template>

          <!-- 手机登录表单 -->
          <template v-else>
            <div class="form-group">
              <label for="phone">手机号码</label>
              <input
                  id="phone"
                  v-model="form.phone"
                  type="tel"
                  placeholder="请输入您的手机号"
                  required
                  pattern="^1[3-9]\d{9}$"
                  class="form-input"
              />
            </div>
          </template>

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
              <input type="checkbox" v-model="form.rememberMe"/>
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
              <path fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            使用 Google 登录
          </button>

          <button class="social-button github">
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path fill="#333"
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
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
import {ref, onMounted, onUnmounted} from 'vue'
import {useRouter} from 'vue-router'

const router = useRouter()

const loginType = ref('phone') // 默认为手机登录

const form = ref({
  email: '',
  phone: '',
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

const count = ref(0);

const click = () => {
  if (count.value === 10) {
    count.value = 0
    return;
  }
  // 每次点击让计数加1
  count.value++
}

const handleLogin = async () => {
  isLoading.value = true

  try {
    // 模拟登录请求
    await new Promise((resolve) => setTimeout(resolve, 1500))

    const loginInfo = {
      loginType: loginType.value,
      password: form.value.password,
      loginTime: new Date().toISOString()
    }

    if (loginType.value === 'email') {
      loginInfo.email = form.value.email
      console.log('邮箱登录信息:', loginInfo)
    } else {
      loginInfo.phone = form.value.phone
      console.log('手机登录信息:', loginInfo)
    }

    // 如果记住我，则保存到本地存储
    if (form.value.rememberMe) {
      localStorage.setItem('userInfo', JSON.stringify(loginInfo))
    }

    // 保存登录状态
    localStorage.setItem('token', 'mock-token-' + Date.now())

    // 跳转到首页
    router.push('/')
  } catch (error) {
    console.error('登录失败:', error)
    alert('登录失败，请重试')
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
/* 基础重置和比例设置 */
* {
  box-sizing: border-box;
}

.login-container {
  height: 100vh;
  display: flex;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  width: 100vw;
  margin: 0;
  padding: 0;
  overflow: hidden;
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
  height: 100vh;
  overflow-y: auto;
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
  padding: clamp(16px, 2vw, 40px);
  height: 100vh;
  overflow-y: auto;
}

.login-card {
  background: white;
  border-radius: clamp(16px, 2vw, 24px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  padding: clamp(16px, 3vw, 32px);
  width: 100%;
  max-width: min(420px, 85vw);
  text-align: center;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin: 0 auto;
  box-sizing: border-box;
  max-height: 90vh;
  overflow-y: auto;
}

.logo-section {
  margin-bottom: clamp(20px, 3vw, 32px);
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

/* 登录方式切换标签 */
.login-tabs {
  display: flex;
  gap: 12px;
  margin-bottom: clamp(20px, 3vw, 32px);
  padding: 4px;
  background: #f0f2f5;
  border-radius: 10px;
}

.tab-btn {
  flex: 1;
  padding: clamp(10px, 1.5vw, 12px);
  border: none;
  background: transparent;
  color: #666;
  font-size: clamp(14px, 1.5vw, 16px);
  font-weight: 600;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.tab-btn:hover {
  color: #667eea;
  background: rgba(102, 126, 234, 0.05);
}

.tab-btn.active {
  background: white;
  color: #667eea;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.06);
  font-weight: 600;
}

.login-form {
  margin-bottom: clamp(16px, 2vw, 24px);
}

.form-group {
  margin-bottom: clamp(12px, 1.5vw, 20px);
  text-align: left;
}

.form-group label {
  display: block;
  margin-bottom: clamp(6px, 1vw, 8px);
  font-weight: 600;
  color: #333;
  font-size: clamp(14px, 1.5vw, 16px);
}

.form-input {
  width: 100%;
  padding: clamp(10px, 1.5vw, 14px) clamp(12px, 2vw, 16px);
  border: 2px solid #e1e8ed;
  border-radius: clamp(8px, 1.5vw, 10px);
  font-size: clamp(14px, 1.5vw, 16px);
  transition: all 0.3s ease;
  box-sizing: border-box;
  background: #f8fafc;
  line-height: 1.2;
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
  margin-bottom: clamp(12px, 2vw, 20px);
  font-size: clamp(12px, 1.5vw, 14px);
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
  padding: clamp(10px, 1.5vw, 12px);
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: clamp(8px, 1.5vw, 10px);
  font-size: clamp(14px, 1.8vw, 16px);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: clamp(12px, 2vw, 18px);
  box-shadow: 0 3px 10px rgba(102, 126, 234, 0.3);
  line-height: 1.2;
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
  margin: clamp(16px, 2vw, 24px) 0;
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
  gap: clamp(8px, 1.5vw, 12px);
  margin-bottom: clamp(12px, 2vw, 20px);
}

.social-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(8px, 1vw, 10px);
  padding: clamp(8px, 1.5vw, 12px) clamp(10px, 2vw, 14px);
  border: 1px solid #e1e8ed;
  border-radius: clamp(6px, 1vw, 8px);
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: clamp(12px, 1.5vw, 14px);
  font-weight: 600;
  color: #333;
  line-height: 1.2;
}

.social-button:hover {
  border-color: #667eea;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.signup-link {
  color: #666;
  font-size: clamp(12px, 1.5vw, 14px);
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
    height: 100vh;
  }

  .login-sidebar {
    display: none !important;
  }

  .login-main {
    padding: clamp(10px, 2vw, 20px);
    height: 100vh;
    min-height: auto;
  }

  .login-card {
    padding: clamp(12px, 3vw, 20px);
    border-radius: clamp(12px, 2vw, 16px);
    max-height: 95vh;
  }

  .logo-section h1 {
    font-size: clamp(20px, 4vw, 24px);
  }

  .logo-section p {
    font-size: clamp(12px, 2vw, 14px);
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

  .login-tabs {
    gap: 8px;
  }

  .tab-btn {
    font-size: 14px;
    padding: 10px;
  }
}

</style>
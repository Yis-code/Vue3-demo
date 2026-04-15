<template>
  <div class="login-container">
    <!-- PC端大屏左侧介绍区域 -->
    <div class="login-sidebar" v-if="isLargeScreen">
      <div class="sidebar-content">
        <img src="../../assets/logo.svg" alt="Vue Logo" class="sidebar-logo"/>
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
          <img src="../../assets/logo.svg" alt="Vue Logo" class="logo"/>
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
            <div class="password-input-wrapper">
              <input
                  id="password"
                  v-model="form.password"
                  :type="showPassword ? 'text' : 'password'"
                  placeholder="请输入您的密码"
                  required
                  class="form-input"
              />
              <button
                  type="button"
                  class="password-toggle"
                  @click="showPassword = !showPassword"
                  :title="showPassword ? '隐藏密码' : '显示密码'"
              >
                <svg v-if="showPassword" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     stroke-width="2">
                  <path
                      d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                  <line x1="1" y1="1" x2="23" y2="23"></line>
                </svg>
                <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     stroke-width="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </button>
            </div>
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
import './Login.css'

const router = useRouter()

const loginType = ref('phone') // 默认为手机登录

const form = ref({
  email: '',
  phone: '13716356099',
  password: '123456Ab',
  rememberMe: false
})

const isLoading = ref(false)
const isLargeScreen = ref(false)
const showPassword = ref(false)

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

<template>
  <aside class="sidebar">
    <nav class="menu">
      <div class="menu-item" v-for="menu in menuData" :key="menu.name">
        <div class="menu-title" @click="toggleMenu(menu.name)">
          <span class="menu-icon">{{ menu.icon }}</span>
          <span>{{ menu.title }}</span>
          <span
              v-if="menu.children && menu.children.length > 0"
              class="arrow"
              :class="{ expanded: expandedMenus.includes(menu.name) }"
          >▼</span>
        </div>
        <div
            class="submenu"
            v-if="menu.children && menu.children.length > 0"
            v-show="expandedMenus.includes(menu.name)"
        >
          <div
              class="submenu-item"
              v-for="child in menu.children"
              :key="child.name"
              @click="handleMenuClick(child)"
          >
            {{ child.title }}
          </div>
        </div>
      </div>
    </nav>
  </aside>
</template>

<script setup>
import {ref, defineEmits} from 'vue'
import "./Sidebar.css"

const emit = defineEmits(['menu-click'])

const expandedMenus = ref(['dashboard'])

const menuData = [
  {
    name: 'dashboard',
    title: '仪表盘',
    icon: '📊',
    children: [
      {name: 'data-overview', title: '数据概览'},
      {name: 'realtime-monitor', title: '实时监控'},
      {name: 'report-analysis', title: '报表分析'}
    ]
  },
  {
    name: 'customer',
    title: '客户管理',
    icon: '👥',
    children: [
      {name: 'customer-list', title: '客户列表'},
      {name: 'customer-group', title: '客户分组'}
    ]
  },
  {
    name: 'order',
    title: '订单管理',
    icon: '📦',
    children: [
      {name: 'sales-order', title: '销售订单'},
      {name: 'purchase-order', title: '采购订单'},
      {name: 'order-query', title: '订单查询'}
    ]
  },
  {
    name: 'workorder',
    title: '工单管理',
    icon: '🔧',
    children: [
      {name: 'pending-workorder', title: '待处理工单'},
      {name: 'completed-workorder', title: '已完成工单'}
    ]
  },
  {
    name: 'settings',
    title: '系统设置',
    icon: '⚙️',
    children: [
      {name: 'basic-config', title: '基础配置'},
      {name: 'permission-manage', title: '权限管理'},
      {name: 'log-manage', title: '日志管理'}
    ]
  }
]

const toggleMenu = (menuName) => {
  const index = expandedMenus.value.indexOf(menuName)
  if (index > -1) {
    expandedMenus.value.splice(index, 1)
  } else {
    expandedMenus.value.push(menuName)
  }
}

const handleMenuClick = (menuItem) => {
  emit('menu-click', menuItem)
}
</script>

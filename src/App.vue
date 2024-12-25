<template>
  <div class="app-container">
    <Transition name="fade">
      <div class="logo-container" v-if="currentRoute !== '/'">
        <router-link to="/" class="logo">
          <span class="logo-text">Cultura Mixta</span>
        </router-link>
      </div>
    </Transition>

    <div class="page-container" :class="{ 'no-top-padding': currentRoute === '/' }">
      <router-view v-slot="{ Component }">
        <transition 
          name="page" 
          mode="out-in"
          @before-leave="beforeLeave"
          @enter="enter"
          @after-enter="afterEnter"
        >
          <div class="page-content">
            <component :is="Component" :key="currentRoute" />
          </div>
        </transition>
      </router-view>
    </div>

    <a href="https://twitter.com/codelumus" target="_blank" rel="noopener" class="dev-watermark">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="m18 16 4-4-4-4"></path>
        <path d="m6 8-4 4 4 4"></path>
        <path d="m14.5 4-5 16"></path>
      </svg>
      <span>
        <span class="code-tag">&lt;</span>
        CodeLumus
        <span class="code-tag">/&gt;</span>
      </span>
    </a>

    <div class="dock-wrapper">
      <div class="dock-background"></div>
      <nav class="dock-menu">
        <router-link 
          v-for="item in menuItems" 
          :key="item.path"
          :to="item.path"
          class="dock-item"
          :class="{ active: currentRoute === item.path }"
        >
          <div class="dock-icon-wrapper">
            <component :is="item.icon" />
          </div>
          <span class="dock-label">{{ item.label }}</span>
        </router-link>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { Home, UtensilsCrossed, MapPin, Info, Phone } from 'lucide-vue-next'
import 'primevue/resources/themes/lara-light-indigo/theme.css'
import 'primeicons/primeicons.css'

const route = useRoute()
const currentRoute = computed(() => route.path)

const menuItems = [
  { label: 'Home', icon: Home, path: '/' },
  { label: 'Menu', icon: UtensilsCrossed, path: '/menu' },
  { label: 'Find Us', icon: MapPin, path: '/find-us' },
  { label: 'About', icon: Info, path: '/about' },
  { label: 'Contact', icon: Phone, path: '/contact' }
]

// Transition hooks
const beforeLeave = (el: Element) => {
  el.classList.add('page-absolute')
}

const enter = (el: Element) => {
  el.classList.add('page-absolute')
}

const afterEnter = (el: Element) => {
  el.classList.remove('page-absolute')
}
</script>

<style>
@media (forced-colors: active) {
  :root {
    --dock-background: Canvas;
    --dock-border: CanvasText;
    --primary-color: Highlight;
    --text-color: CanvasText;
    --glass-background: Canvas;
    --glass-border: CanvasText;
  }

  .dock-menu {
    forced-color-adjust: none;
  }

  .dock-icon-wrapper {
    forced-color-adjust: none;
  }

  .dock-item svg {
    forced-color-adjust: none;
  }
}

:root {
  --dock-height: 65px;
  --dock-spacing: calc(var(--dock-height) + 30px);
  --dock-background: rgba(255, 255, 255, 0.6);
  --dock-border: rgba(255, 255, 255, 0.15);
  --primary-color: #FFB800;
  --text-color: #2C3E50;
  --dock-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  --dock-item-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  --dock-active-shadow: 0 8px 24px rgba(230, 126, 34, 0.5);
  --glass-background: rgba(255, 255, 255, 0.7);
  --glass-border: rgba(255, 255, 255, 0.2);
  --active-background: #E67E22;
  --dock-glow: 0 0 20px rgba(255, 255, 255, 0.5);
}

.app-container {
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  background: white;
}

.dev-watermark {
  position: fixed;
  bottom: calc(var(--dock-height) + 30px);
  right: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: monospace;
  font-size: 0.9rem;
  font-weight: bold;
  color: #64748b;
  text-decoration: none;
  opacity: 0.8;
  transition: all 0.3s ease;
  z-index: 900;
  background: #f3f4f6;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
}

.dev-watermark:hover {
  opacity: 1;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.dev-watermark svg {
  width: 16px;
  height: 16px;
  color: var(--primary-color);
}

.dev-watermark .code-tag {
  color: #64748b;
}

.logo-container {
  position: relative;
  z-index: 100;
  padding: 1rem;
  display: flex;
  justify-content: center;
  transform-origin: center top;
  height: 3.5rem;
}

.page-container {
  position: relative;
  overflow: hidden;
  min-height: 100%;
  grid-row: 2;
  margin-top: -0.5rem;
  z-index: 1;
  background: white;
  padding-bottom: var(--dock-spacing);
}

.page-container.no-top-padding .logo-container {
  display: none;
}

/* Page Transitions */
.page-absolute {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  min-height: 100%;
  background: white;
  z-index: 1;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute;
  width: 100%;
}

.page-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.page-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

/* Dock Styles */
.dock-wrapper {
  grid-row: 3;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: calc(var(--dock-height) + 15px);
  z-index: 1000;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 0 16px;
  margin-bottom: env(safe-area-inset-bottom, 0px);
  background: white;
}

.dock-menu {
  position: relative;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 0.5px solid rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  padding: 4px 6px;
  display: flex;
  align-items: center;
  gap: 3px;
  height: var(--dock-height);
  box-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.1),
    0 12px 28px rgba(0, 0, 0, 0.2),
    var(--dock-glow);
  transform-origin: center bottom;
  transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
  will-change: transform;
  isolation: isolate;
  z-index: 1000;
  margin-bottom: 12px;
}

.dock-menu::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 16px;
  padding: 1px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1));
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

.dock-menu:hover {
  transform: translateZ(0) scale(1.02);
  background: rgba(255, 255, 255, 0.95);
}

.dock-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;
  color: var(--text-color);
  padding: 0;
  min-width: 44px;
  height: 100%;
  transition: all 0.2s cubic-bezier(0.2, 0.8, 0.2, 1);
  position: relative;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  outline: none;
}

.dock-item:focus-visible {
  outline: none;
}

.dock-item:focus-visible .dock-icon-wrapper {
  box-shadow: 
    0 0 0 2px var(--primary-color),
    0 2px 4px rgba(0, 0, 0, 0.1),
    0 8px 24px rgba(0, 0, 0, 0.1);
  transform: translateY(-4px) scale(1.1);
}

/* Remove tap highlight color from all interactive elements */
* {
  -webkit-tap-highlight-color: transparent;
}

.dock-icon-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 10px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8));
  margin-bottom: 4px;
  transition: all 0.2s cubic-bezier(0.2, 0.8, 0.2, 1);
  transform-origin: center bottom;
  box-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.1),
    0 8px 24px rgba(0, 0, 0, 0.1);
  border: 0.5px solid rgba(255, 255, 255, 0.5);
  will-change: transform;
}

.dock-item:hover .dock-icon-wrapper {
  transform: translateY(-4px) scale(1.1);
}

.dock-item:hover .dock-label {
  opacity: 1;
  transform: translate(-50%, -8px);
}

.dock-item svg {
  width: 20px;
  height: 20px;
  stroke-width: 1.75;
  color: var(--text-color);
  opacity: 0.8;
  transition: all 0.2s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.dock-label {
  position: absolute;
  bottom: 2px;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(0, 0, 0, 0.6);
  font-size: 10px;
  font-weight: 500;
  white-space: nowrap;
  opacity: 0;
  transition: all 0.2s cubic-bezier(0.2, 0.8, 0.2, 1);
  letter-spacing: 0.3px;
  background: rgba(255, 255, 255, 0.9);
  padding: 4px 8px;
  border-radius: 6px;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  pointer-events: none;
}

.dock-item.active .dock-icon-wrapper {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0.95));
  transform: translateY(-4px) scale(1.1);
  box-shadow: 
    0 8px 24px rgba(0, 0, 0, 0.15),
    0 2px 8px rgba(0, 0, 0, 0.1),
    0 0 20px rgba(255, 255, 255, 0.4);
  border: 0.5px solid rgba(255, 255, 255, 0.8);
}

/* Separate animation class for bounce */
.dock-item.active:not(:active) .dock-icon-wrapper {
  animation: gentleBounce 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

/* Update bounce animation to be more subtle */
@keyframes gentleBounce {
  0%, 100% { transform: translateY(-4px) scale(1.1); }
  50% { transform: translateY(-6px) scale(1.1); }
}

/* Add active press state */
.dock-item:active .dock-icon-wrapper {
  transform: translateY(-2px) scale(1.05);
  transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Remove duplicate animation definition */
.dock-item.active .dock-icon-wrapper {
  transform: translateY(-4px) scale(1.1);
}

.dock-item.active svg {
  color: #000;
  opacity: 1;
  transform: scale(1.1);
  stroke-width: 2;
}

/* Safe Area for iOS */
@supports (padding-bottom: env(safe-area-inset-bottom)) {
  .dock-wrapper {
    padding-bottom: env(safe-area-inset-bottom);
  }
}

/* Dock Animation Keyframes */
@keyframes bounce {
  0%, 100% { transform: translateY(-4px) scale(1.1); }
  50% { transform: translateY(-6px) scale(1.1); }
}

.dock-item.active .dock-icon-wrapper {
  transform: translateY(-4px) scale(1.1);
  animation: bounce 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

/* Logo Styles */
.logo {
  text-decoration: none;
  transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.logo:hover {
  transform: scale(1.05);
}

.logo-text {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--primary-color), #E67E22);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 0.02em;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Add fade transition for logo */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.page-content {
  background: white;
  min-height: 100%;
  width: 100%;
  padding-bottom: var(--dock-spacing);
}

.dock-background {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: calc(var(--dock-height) + 30px);
  background: white;
  z-index: 999;
}
</style>

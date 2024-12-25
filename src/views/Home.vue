<template>
  <div class="home-page">
    <!-- Hero Section -->
    <div class="parallax-container">
      <div class="parallax-background" ref="parallaxBg"></div>
      <div class="hero-content">
        <h1 class="hero-title animate-title">
          Welcome to<br>Cultura Mixta
        </h1>
        <p class="hero-subtitle animate-subtitle">
          Experience the fusion of flavors and family tradition
        </p>
        <PButton 
          label="Visit Us" 
          class="p-button-rounded hero-button animate-button"
          @click="$router.push('/find-us')"
        >
          <template #prepend>
            <i class="pi pi-map-marker mr-2"></i>
          </template>
        </PButton>
      </div>
    </div>

    <!-- Features Section -->
    <div class="features-section">
      <div class="grid">
        <div class="col-12 md:col-4" v-for="feature in features" :key="feature.title">
          <div class="feature-card">
            <div class="feature-icon-wrapper">
              <i :class="feature.icon"></i>
            </div>
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-description">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import 'primeicons/primeicons.css'

const parallaxBg = ref<HTMLElement | null>(null)

const features = [
  {
    icon: 'pi pi-heart feature-icon',
    title: 'Fresh Ingredients',
    description: 'We source the finest local ingredients to create our authentic dishes.'
  },
  {
    icon: 'pi pi-star feature-icon',
    title: 'Family Recipes',
    description: 'Traditional family recipes passed down through generations.'
  },
  {
    icon: 'pi pi-globe feature-icon',
    title: 'Modern Fusion',
    description: 'Classic flavors meet contemporary culinary techniques.'
  }
]

// Parallax scroll effect
const handleScroll = () => {
  if (parallaxBg.value) {
    const scrolled = window.scrollY
    parallaxBg.value.style.transform = `translate3d(0, ${scrolled * 0.5}px, 0)`
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.home-page {
  min-height: 100vh;
}

.parallax-container {
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.parallax-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1974&q=80');
  background-size: cover;
  background-position: center;
  transform: translate3d(0, 0, 0);
  will-change: transform;
}

.parallax-background::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5));
}

.hero-content {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  padding: 2rem;
  z-index: 1;
}

.hero-title {
  font-size: 4rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  animation: slideUp 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.hero-subtitle {
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: -0.01em;
  opacity: 0.9;
  margin-bottom: 2rem;
  max-width: 600px;
  animation: slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s backwards;
}

.hero-button {
  font-size: 1.1rem !important;
  padding: 1rem 2rem !important;
  animation: slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s backwards;
}

.features-section {
  padding: 5rem 2rem;
  background: var(--surface-section);
  position: relative;
}

.feature-card {
  padding: 3rem 2.5rem;
  border-radius: 24px;
  background: white;
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.08),
    0 1px 0 rgba(255, 255, 255, 0.9) inset;
  text-align: center;
  height: 100%;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-color), #E67E22);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.feature-card:hover::before {
  opacity: 1;
}

.feature-icon-wrapper {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(255, 184, 0, 0.1), rgba(230, 126, 34, 0.1));
}

.feature-icon-wrapper::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-color), #E67E22);
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.3s ease;
}

.feature-card:hover .feature-icon-wrapper::after {
  opacity: 0.15;
  transform: scale(1.1);
}

.feature-icon {
  font-size: 2.5rem;
  background: linear-gradient(135deg, var(--primary-color), #E67E22);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  z-index: 1;
}

.feature-title {
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  margin-bottom: 1.2rem;
  color: var(--text-color);
  position: relative;
  display: inline-block;
}

.feature-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 3px;
  background: linear-gradient(90deg, var(--primary-color), #E67E22);
  border-radius: 2px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.feature-card:hover .feature-title::after {
  opacity: 1;
}

.feature-description {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary-color);
  margin: 0;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
  
  .features-section {
    padding: 3rem 1rem;
  }
  
  .feature-card {
    padding: 2.5rem 2rem;
  }
  
  .feature-icon-wrapper {
    width: 70px;
    height: 70px;
    margin-bottom: 1.5rem;
  }
  
  .feature-icon {
    font-size: 2.2rem;
  }
  
  .feature-title {
    font-size: 1.4rem;
  }
  
  .feature-description {
    font-size: 1rem;
    line-height: 1.6;
  }
}
</style> 
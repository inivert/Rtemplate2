<template>
  <div class="about-page">
    <div class="page-header">
      <h1>Our Story</h1>
      <p>The heart and soul of Cultura Mixta</p>
    </div>

    <div class="about-content">
      <div class="grid">
        <div class="col-12 md:col-6">
          <div class="story-section">
            <h2>Our Beginning</h2>
            <p>Founded in 2020, Cultura Mixta was born from a passion for bringing together diverse culinary traditions. Our family-owned restaurant combines generations of recipes with modern cooking techniques.</p>
            
            <h2 class="mt-6">Our Philosophy</h2>
            <p>We believe in creating memorable dining experiences that celebrate the fusion of cultures through food. Every dish tells a story of tradition, innovation, and family.</p>
          </div>
        </div>
        
        <div class="col-12 md:col-6">
          <div class="image-gallery">
            <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600" alt="Restaurant interior" class="gallery-image">
            <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=600" alt="Chef preparing food" class="gallery-image">
          </div>
        </div>
      </div>

      <div class="values-section">
        <h2>Our Values</h2>
        <div class="grid">
          <div class="col-12 md:col-4" v-for="value in values" :key="value.title">
            <div class="value-card">
              <i :class="value.icon"></i>
              <h3>{{ value.title }}</h3>
              <p>{{ value.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const values = [
  {
    icon: 'pi pi-heart text-4xl text-primary mb-3',
    title: 'Passion',
    description: 'We put our heart into every dish we serve, ensuring each meal is crafted with love and care.'
  },
  {
    icon: 'pi pi-users text-4xl text-primary mb-3',
    title: 'Family',
    description: 'We treat every guest as family, creating a warm and welcoming atmosphere for all.'
  },
  {
    icon: 'pi pi-star text-4xl text-primary mb-3',
    title: 'Quality',
    description: 'We use only the finest ingredients, sourced locally whenever possible.'
  }
]
</script>

<style scoped>
.about-page {
  padding: 2rem 1rem;
  padding-bottom: var(--dock-spacing);
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
}

.page-header h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.page-header p {
  color: var(--text-secondary-color);
  font-size: 1.1rem;
}

.story-section {
  padding: 2rem;
}

.story-section h2 {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-color);
}

.story-section p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text-secondary-color);
  margin-bottom: 1.5rem;
}

.image-gallery {
  display: grid;
  gap: 1rem;
  padding: 2rem;
}

.gallery-image {
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.gallery-image:hover {
  transform: scale(1.02);
}

.values-section {
  padding: 4rem 2rem;
  text-align: center;
}

.values-section h2 {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 3rem;
}

.value-card {
  padding: 2rem;
  background: white;
  border-radius: 20px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  height: 100%;
}

.value-card:hover {
  transform: translateY(-5px);
}

.value-card h3 {
  font-size: 1.4rem;
  font-weight: 600;
  margin: 1rem 0;
}

.value-card p {
  color: var(--text-secondary-color);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }
  
  .story-section,
  .image-gallery,
  .values-section {
    padding: 1rem;
  }
  
  .story-section h2 {
    font-size: 1.5rem;
  }
}
</style> 
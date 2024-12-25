<template>
  <div class="menu-container">
    <div 
      class="categories-section"
      v-motion
      :initial="categoryMotion.initial"
      :enter="categoryMotion.enter"
    >
      <h2 class="section-title">Our Menu</h2>
      <div class="category-buttons">
        <button 
          v-for="category in categories" 
          :key="category.id"
          :class="{ active: selectedCategory === category.id }"
          @click="selectedCategory = category.id"
          class="category-button"
          v-motion
          :initial="buttonMotion.initial"
          :enter="buttonMotion.enter"
          :hover="buttonMotion.hover"
        >
          {{ category.name }}
        </button>
      </div>
    </div>

    <div 
      class="menu-items"
      v-motion
      :initial="menuItemsMotion.initial"
      :enter="menuItemsMotion.enter"
    >
      <TransitionGroup 
        name="menu-item" 
        tag="div" 
        class="menu-grid"
      >
        <div 
          v-for="item in filteredItems" 
          :key="item.id"
          class="menu-item"
          v-motion
          :initial="itemMotion.initial"
          :enter="itemMotion.enter"
          :hover="itemMotion.hover"
        >
          <div class="item-image">
            <img :src="item.image" :alt="item.name">
            <span class="price">${{ item.price.toFixed(2) }}</span>
          </div>
          <div class="item-content">
            <h3>{{ item.name }}</h3>
            <p class="description">{{ item.description }}</p>
          </div>
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const selectedCategory = ref('main')

const categories = [
  { id: 'main', name: 'Main Dishes' },
  { id: 'appetizers', name: 'Appetizers' },
  { id: 'desserts', name: 'Desserts' },
  { id: 'drinks', name: 'Drinks' }
]

const menuItems = [
  {
    id: 1,
    name: 'Enchiladas Verdes',
    description: 'Corn tortillas filled with chicken, topped with green salsa, cream, and cheese',
    price: 15.99,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1534352956036-cd81e27dd615?w=500&auto=format'
  },
  {
    id: 2,
    name: 'Tacos al Pastor',
    description: 'Marinated pork tacos with pineapple, onion, and cilantro',
    price: 13.99,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=500&auto=format'
  },
  {
    id: 3,
    name: 'Mole Poblano',
    description: 'Chicken in rich chocolate-chili sauce with sesame seeds',
    price: 17.99,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=500&auto=format'
  },
  {
    id: 4,
    name: 'Guacamole',
    description: 'Fresh avocado dip with tomatoes, onions, and cilantro',
    price: 8.99,
    category: 'appetizers',
    image: 'https://images.unsplash.com/photo-1595018507685-7a8b8a5ff72c?w=500&auto=format'
  },
  {
    id: 5,
    name: 'Queso Fundido',
    description: 'Melted cheese with chorizo and tortillas',
    price: 9.99,
    category: 'appetizers',
    image: 'https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=500&auto=format'
  },
  {
    id: 6,
    name: 'Elote',
    description: 'Grilled corn with mayo, cheese, chili powder, and lime',
    price: 6.99,
    category: 'appetizers',
    image: 'https://images.unsplash.com/photo-1593465678160-f99a8371fcf6?w=500&auto=format'
  },
  {
    id: 7,
    name: 'Churros',
    description: 'Fried dough pastry with cinnamon sugar and chocolate sauce',
    price: 7.99,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1624371414361-e670edf4698d?w=500&auto=format'
  },
  {
    id: 8,
    name: 'Flan',
    description: 'Classic Mexican caramel custard',
    price: 6.99,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1602663491496-73f07481dbea?w=500&auto=format'
  },
  {
    id: 9,
    name: 'Tres Leches',
    description: 'Three milk cake with whipped cream',
    price: 8.99,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1602663491476-5f29e7df1c92?w=500&auto=format'
  },
  {
    id: 10,
    name: 'Horchata',
    description: 'Sweet rice drink with cinnamon',
    price: 3.99,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1586189552744-6a7070c4d841?w=500&auto=format'
  },
  {
    id: 11,
    name: 'Jamaica',
    description: 'Hibiscus iced tea',
    price: 3.99,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1560508180-03f285f67ded?w=500&auto=format'
  },
  {
    id: 12,
    name: 'Mexican Coca Cola',
    description: 'Classic coke made with real sugar',
    price: 3.49,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=500&auto=format'
  }
]

const filteredItems = computed(() => {
  return menuItems.filter(item => item.category === selectedCategory.value)
})

// Motion configurations
const categoryMotion = {
  initial: {
    opacity: 0,
    y: 50
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 500
    }
  }
}

const buttonMotion = {
  initial: {
    opacity: 0,
    scale: 0.9
  },
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 300
    }
  },
  hover: {
    scale: 1.05
  }
}

const menuItemsMotion = {
  initial: {
    opacity: 0
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 300
    }
  }
}

const itemMotion = {
  initial: {
    opacity: 0,
    y: 20
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 400,
      delay: 200
    }
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 200
    }
  }
}
</script>

<style scoped>
.menu-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  padding-bottom: var(--dock-spacing);
}

.categories-section {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 2rem;
  font-weight: 600;
}

.category-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.category-button {
  padding: 0.75rem 1.5rem;
  border: none;
  background: white;
  border-radius: 12px;
  font-size: 1rem;
  color: var(--text-color);
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.category-button.active {
  background: var(--primary-color);
  color: white;
  box-shadow: 0 4px 12px rgba(212, 175, 55, 0.2);
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
}

.menu-item {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  position: relative;
}

.item-image {
  width: 100%;
  height: 200px;
  position: relative;
  overflow: hidden;
}

.item-image::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: linear-gradient(to bottom, transparent, white);
}

.item-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.price {
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-size: 1.25rem;
  color: var(--primary-color);
  font-weight: 600;
  background: white;
  padding: 0.25rem 0.75rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 2;
}

.item-content {
  padding: 1.5rem;
  position: relative;
}

.item-content h3 {
  font-size: 1.25rem;
  color: var(--text-color);
  margin-bottom: 0.5rem;
}

.description {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0;
  line-height: 1.4;
}

/* Transitions */
.menu-item-enter-active,
.menu-item-leave-active {
  transition: all 0.4s ease;
}

.menu-item-enter-from,
.menu-item-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.menu-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.menu-item:hover .item-image img {
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .menu-grid {
    grid-template-columns: 1fr;
  }
  
  .category-buttons {
    flex-direction: row;
    overflow-x: auto;
    padding-bottom: 1rem;
    margin: 0 -1rem;
    padding: 0 1rem 1rem;
  }
  
  .category-button {
    white-space: nowrap;
  }
}
</style> 
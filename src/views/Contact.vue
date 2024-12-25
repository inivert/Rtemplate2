<template>
  <div class="contact-page">
    <div class="page-header">
      <h1>Contact Us</h1>
      <p>Get in touch with Cultura Mixta</p>
    </div>

    <div class="contact-content">
      <div class="contact-info">
        <div class="info-card">
          <div class="info-item">
            <i class="pi pi-phone"></i>
            <div>
              <h3>Phone</h3>
              <p>(555) 123-4567</p>
            </div>
          </div>
          
          <div class="info-item">
            <i class="pi pi-clock"></i>
            <div>
              <h3>Hours</h3>
              <p>Monday - Thursday: 11:00 AM - 10:00 PM<br>
                 Friday - Saturday: 11:00 AM - 11:00 PM<br>
                 Sunday: 11:00 AM - 9:00 PM</p>
            </div>
          </div>
          
          <div class="info-item">
            <i class="pi pi-map-marker"></i>
            <div>
              <h3>Location</h3>
              <p>456 Heartland Avenue<br>Smith Center, KS 66967</p>
            </div>
          </div>
        </div>

        <div class="social-links">
          <h3>Follow Us</h3>
          <div class="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener" class="social-icon facebook">
              <i class="pi pi-facebook"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener" class="social-icon instagram">
              <i class="pi pi-instagram"></i>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener" class="social-icon twitter">
              <i class="pi pi-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import 'primeicons/primeicons.css'
</script>

<style scoped>
.contact-page {
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
  color: var(--primary-color);
}

.page-header p {
  color: var(--text-secondary-color);
  font-size: 1.1rem;
}

.contact-content {
  display: flex;
  justify-content: center;
  padding: 0 1rem;
}

.contact-info {
  max-width: 600px;
  width: 100%;
}

.info-card {
  padding: 2rem;
  background: white;
  border-radius: 24px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
}

.info-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
}

.info-item:last-child {
  margin-bottom: 0;
}

.info-item i {
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-right: 1rem;
  margin-top: 0.25rem;
}

.info-item h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-color);
}

.info-item p {
  color: var(--text-secondary-color);
  line-height: 1.6;
  font-size: 1.1rem;
}

.social-links {
  text-align: center;
  background: white;
  border-radius: 24px;
  padding: 2.5rem;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
  margin-top: 2rem;
}

.social-links h3 {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1.8rem;
  color: var(--text-color);
  position: relative;
  display: inline-block;
}

.social-links h3::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 3px;
  background: var(--primary-color);
  border-radius: 2px;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.social-icon {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.social-icon::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0));
  z-index: 1;
}

.social-icon i {
  font-size: 1.6rem;
  position: relative;
  z-index: 2;
}

.social-icon:hover {
  transform: translateY(-4px) scale(1.05);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.social-icon.facebook {
  background: linear-gradient(45deg, #1877f2, #0d5ab9);
}

.social-icon.instagram {
  background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
}

.social-icon.twitter {
  background: linear-gradient(45deg, #00acee, #1c9cea);
}

@media (max-width: 768px) {
  .social-icon {
    width: 48px;
    height: 48px;
  }
  
  .social-icon i {
    font-size: 1.4rem;
  }
  
  .social-icons {
    gap: 1.5rem;
  }
}
</style> 
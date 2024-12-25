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
            <a href="#" class="social-icon"><i class="pi pi-facebook"></i></a>
            <a href="#" class="social-icon"><i class="pi pi-instagram"></i></a>
            <a href="#" class="social-icon"><i class="pi pi-twitter"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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
  padding: 2rem;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
}

.social-links h3 {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--text-color);
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.social-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--surface-ground);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-color);
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1.25rem;
}

.social-icon:hover {
  background: var(--primary-color);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }
  
  .info-card,
  .social-links {
    padding: 1.5rem;
  }
  
  .social-icon {
    width: 40px;
    height: 40px;
    font-size: 1.1rem;
  }
}
</style> 
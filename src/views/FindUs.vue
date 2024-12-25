<template>
  <div class="find-us-container">
    <div class="page-header">
      <h1>Find Us</h1>
      <p>Visit us and experience authentic Mexican cuisine</p>
    </div>

    <div class="content-grid">
      <div class="location-info">
        <div class="info-card">
          <h2>Our Location</h2>
          <div class="address">
            <i class="pi pi-map-marker"></i>
            <div>
              <p>456 Heartland Avenue</p>
              <p>Smith Center, KS 66967</p>
            </div>
          </div>
          <div class="hours">
            <h3>Opening Hours</h3>
            <ul>
              <li><span>Monday - Thursday:</span> 11:00 AM - 10:00 PM</li>
              <li><span>Friday - Saturday:</span> 11:00 AM - 11:00 PM</li>
              <li><span>Sunday:</span> 11:00 AM - 9:00 PM</li>
            </ul>
          </div>
          <div class="contact">
            <h3>Contact</h3>
            <p><i class="pi pi-phone"></i> (555) 123-4567</p>
            <p><i class="pi pi-envelope"></i> info@mexicanrestaurant.com</p>
          </div>
          <div class="directions">
            <a 
              :href="'https://www.google.com/maps/dir/?api=1&destination=' + coordinates.lat + ',' + coordinates.lng" 
              target="_blank" 
              class="direction-button"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>

      <div class="map-container">
        <iframe
          width="100%"
          height="100%"
          style="border:0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12437489.378644694!2d-108.53221764532294!3d39.82830054771372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sus!4v1709612031316!5m2!1sen!2sus"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

// Restaurant coordinates (Central US - Kansas)
const coordinates = {
  lat: 39.8283,
  lng: -98.5795
}
</script>

<style scoped>
.find-us-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  padding-bottom: var(--dock-spacing);
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

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 2rem;
  margin-top: 2rem;
}

.location-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.info-card {
  background: white;
  border-radius: 24px;
  padding: 2rem;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
}

.info-card h2 {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--text-color);
}

.address {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 2rem;
}

.address i {
  font-size: 1.5rem;
  color: var(--primary-color);
}

.address p {
  margin: 0;
  line-height: 1.6;
  color: var(--text-secondary-color);
}

.hours {
  margin-bottom: 2rem;
}

.hours h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.hours ul {
  list-style: none;
  padding: 0;
}

.hours li {
  margin-bottom: 0.5rem;
  color: var(--text-secondary-color);
}

.hours li span {
  font-weight: 500;
  color: var(--text-color);
}

.contact {
  margin-bottom: 2rem;
}

.contact h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.contact p {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  color: var(--text-secondary-color);
}

.contact i {
  color: var(--primary-color);
}

.directions {
  text-align: center;
}

.direction-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  background: var(--primary-color);
  color: white;
  text-decoration: none;
  border-radius: 12px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.direction-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.map-container {
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
  background: white;
  height: 600px;
}

#map {
  width: 100%;
  height: 100%;
}

@media (max-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr;
  }

  .map-container {
    height: 400px;
    order: -1;
  }

  .page-header h1 {
    font-size: 2rem;
  }
}

/* Remove unused Leaflet styles */
:deep(.custom-marker),
:deep(.custom-marker i),
:deep(.leaflet-popup-content-wrapper),
:deep(.leaflet-popup-content) {
  display: none;
}
</style> 
<template>
  <div class="about">
    <Banner :title="'About'" :subtitle="'Introduction and more details about me'" />
    <div class="info-section">
        <div class="container">
          <div class="content">
            <img class="profile-picture" :src="headShot1Img" alt="Profile Picture" />
            <div class="details">
              <h2>Your Name</h2>
              <p>Brief introduction about yourself. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
              <ul class="social-links">
                <li><a href="https://facebook.com/yourprofile" target="_blank"><i class="fab fa-facebook"></i></a></li>
                <li><a href="https://instagram.com/yourprofile" target="_blank"><i class="fab fa-instagram"></i></a></li>
                <li><a href="https://discord.com/yourprofile" target="_blank"><i class="fab fa-discord"></i></a></li>
              </ul>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import headShot1Img from '@/assets/images/headshot-1.png'
import Banner from '@/components/Banner.vue'

export default {
  components: {
    Banner
  },
  setup() {
    return { headShot1Img };
  }
};
</script>

<style scoped>
.about {
  height: 100vh;
}

.info-section {
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  width: 100%;
  max-width: 1200px;
  padding: 20px;
}

.content {
  display: flex;
  align-items: center;
  padding: 40px 0;
}

.profile-picture {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.details {
  flex: 1;
}

.details h2 {
  font-size: 2em;
  color: #333;
  margin-bottom: 20px;
}

.details p {
  font-size: 1.2em;
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
}

.social-links {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 20px;
}

.social-links li {
  display: inline-block;
}

.social-links a {
  font-size: 1.5em;
  color: #007BFF;
  transition: color 0.3s;
}

.social-links a:hover {
  color: #0056b3;
}

@media (max-width: 768px) {
  .content {
    flex-direction: column;
    gap: 30px;
  }
  .profile-picture {
    margin-right: 0px;
  }
  .details {
    text-align: center;
    width: 80%;
  }
  .social-links {
    display: flex;
    justify-content: center;
  }
}
</style>

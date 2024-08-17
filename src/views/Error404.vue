<template>
  <div class="error-page">
    <div class="error-container">
      <div class="error-title">
        404
      </div>
      <div class="error-subtitle">
        Oops! Page Not Found
      </div>
      <div class="error-description">
        Sorry, the page you are looking for doesn't exist.
      </div>
      <button class="error-button" @click="goBack">Go Back</button>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name: 'Error-404',
  setup() {
    const router = useRouter();

    const goBack = () => {
      router.go(-1);
    }

    return { goBack };
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400&display=swap');

.error-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
}

.error-container {
  text-align: center;
  animation: fadeIn 1.5s ease-in-out;
}

.error-title {
  font-size: 10rem;
  font-family: 'Roboto', sans-serif;
  color: #ff6f61;
}

.error-subtitle {
  font-size: 2rem;
  font-family: 'Open Sans', sans-serif;
  color: #333;
  margin-top: -20px;
}

.error-description {
  font-size: 1.2rem;
  font-family: 'Open Sans', sans-serif;
  color: #666;
  margin: 20px 0;
}

.error-button {
  background-color: #ff6f61;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: 800;
  font-family: 'Open Sans', sans-serif;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.error-button:hover {
  background-color: #ff8a7d;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>

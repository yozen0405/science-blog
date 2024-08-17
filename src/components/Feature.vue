<template>
  <section class="feature">
    <div class="features">
      <TitleHeader :title="'Our key feature'" />
      <div class="features-list">
        <div
          class="feature-item"
          v-for="feature in features"
          :key="feature.title"
        >
          <i :class="feature.icon" class="feature-icon"></i>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-text">{{ feature.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import TitleHeader from './TitleHeader.vue';

export default {
  components: {
    TitleHeader
  },
  setup() {
    const features = ref([
      {
        icon: "fas fa-rocket",
        title: "Innovation",
        text: "We bring the latest advancements in science and technology to the forefront.",
      },
      {
        icon: "fas fa-brain",
        title: "Expertise",
        text: "Our team consists of top experts in various scientific fields.",
      },
      {
        icon: "fas fa-globe",
        title: "Global Reach",
        text: "We aim to educate and inspire people around the world.",
      },
    ]);

    return { features };
  },
};
</script>

<style scoped>
.feature {
    background-color: wheat; /* 淡紫色背景 */
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 20px; /* 調整內邊距 */
}

.features {
  padding: 60px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.features-list {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
}

.feature-item {
  flex: 1 1 280px; /* 調整最小寬度 */
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  max-width: 300px; /* 調整最大寬度 */
}

.feature-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.feature-icon {
  font-size: 3rem;
  color: #fbc02d; /* 黃色圖標 */
  margin-bottom: 10px;
}

.feature-title {
  font-size: 1.25rem;
  margin: 10px 0;
  color: black;
}

.feature-text {
  font-size: 1rem;
  color: #666;
}

/* 響應式設置 */
@media (max-width: 768px) {
  .features-list {
    flex-direction: column;
    align-items: center;
  }

  .feature-item {
    margin-bottom: 20px;
  }
}
</style>

<template>
  <div class="banner">
    <div class="container">
        <h2 class="banner-title">{{ title }}</h2>
        <span class="banner-subtitle">{{ subtitle }}</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Banner',
  props: ['title', 'subtitle'],
};
</script>

<style scoped>
.banner {
  position: relative;
  width: 100%;
  min-height: 440px;
  display: grid;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: #1a1e21;
}
.container {
    color: white;
    text-align: center;
}

.banner-title {
  font-size: 3.5rem;
  padding: 10px 20px;
} 

.banner-subtitle {
    font-size: 1rem;
    font-weight: 400;
}

</style>

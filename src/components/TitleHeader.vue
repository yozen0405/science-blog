<template>
    <div class="features-header">
        <h2 class="features-title">{{ title }}</h2>
        <div class="features-divider"></div>
    </div>
</template>

<script>
export default {
    props: ['title'],
    setup() {

    },
};
</script>

<style scoped>
.features-header {
  text-align: center;
  margin-bottom: 30px;
}

.features-title {
  font-size: 2.5rem; /* 增加標題大小 */
  color: black; /* 紫色文字 */
  margin-bottom: 10px;
}

.features-divider {
  width: 80px;
  height: 4px;
  background-color: #fbc02d; /* 黃色分隔線 */
  margin: 0 auto;
  border-radius: 2px;
}
</style>

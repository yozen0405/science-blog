<template>
    <div class="container">
        <Post1 v-if="id === 'Post1'" />
        <Error404 v-else />
    </div>
</template>

<script>
import Error404 from '@/views/Error404.vue'
import Post1 from '@/components/posts/Post1.vue'

export default {
    props: ['id'],
    components: {
        Post1, Error404
    },
    setup(props) {
        
    },
};
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
}
</style>

<template>
    <div class="container">
        <div class="text">
            <h2>Are You Looking?</h2>
            <h1>Popular science</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, velit?</p>
            <router-link :to="{ name: 'Blogs' }" class="btn-visit-blog">Visit Our Blog &rarr;</router-link>
        </div>
    </div>
    <Feature />
</template>

<script>
import PostList from '@/components/PostList.vue'
import Feature from '@/components/Feature.vue'

export default {
    components: {
        PostList, Feature
    }
}
</script>

<style scoped>
    .container {
        width: 100%;
        min-height: 100vh;
        position: relative;
        background: url('@/assets/images/background2.jpg') no-repeat center center/cover;
        display: flex;
        align-items: center;
        justify-content: flex-start; 
    }
    .container::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1;
    }
    .text {
        position: relative;
        width: 100%;
        padding-left: 14vw;
        padding-right: 14vw;
        z-index: 2;
        color: white;
    }
    .text h2 {
        font-size: 2.6rem;
        margin-bottom: 0.1rem;
    }
    .text h1 {
        font-size: 4rem;
        color: orange;
        line-height: 4rem;
        margin-bottom: 3.5rem;
    }
    .text p {
        font-size: 1.2rem;
        line-height: 1.5;
        max-width: 600px;
    }
    .btn-visit-blog {
        display: inline-block;
        padding: 10px 20px;
        font-size: 1.2rem;
        color: white;
        border: 2px solid white;
        border-radius: 7px;
        text-decoration: none;
        text-align: center;
        transition: background-color 0.3s, color 0.3s;
        margin-top: 20px;
    }
    .btn-visit-blog:hover {
        background-color: #f0f0f0; /* 背景颜色变化 */
        color: #000;
    }

    @media (max-width: 768px) {
        .text h1 {
            line-height: 5.1rem;
        }
        .text h2 {
            margin-bottom: 0.5rem;
        }
        .text p {

        }
    }
</style>

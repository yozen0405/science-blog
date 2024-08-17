<template>
    <div class="blog">
        <Banner :title="'Blog'" :subtitle="'Your source for great content'"/>
        <div class="blog-container">
            <div class="blog-sidebars">
                <div class="posts-wrapper">
                    <PostList @posts="handleGetPosts" @toggle-tag="handleAddTag" :selectedTags="selectedTags" :resetPage="resetPage"/>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue'
import BlogTags from '@/components/BlogTags.vue'
import PostList from '@/components/PostList.vue'
import TagItem from '@/components/Tag-item.vue';

import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  components: {
    Banner, PostList, BlogTags, TagItem
  },
  setup() {
    const router = useRouter();
    const posts = ref([]);
    const selectedTags = ref([]);
    const resetPage = ref(true);

    const handleGetPosts = (_posts) => {
        posts.value = _posts;
    }

    const handleAddTag = (_tag) => {
        if (_tag) {
            router.push({ name: 'Tags', params: { tagId: _tag }});
        }
    }

    return { handleGetPosts, selectedTags, posts, resetPage, handleAddTag };
  },
};
</script>

<style scoped>
.blog-container {
    background-color: #fff8e1;
    padding: 4vh 100px 0;
    margin: 0 auto;
    min-height: 826px;
}

.blog-sidebars {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1300px;
    padding-bottom: 80px;
    margin: 0 auto;
    position: relative;
}

.posts-wrapper {
    width: calc(100% - 350px);
    padding-left: 0;
    padding-right: 0;
}

.separator {
    border: 0;
    height: 1px;
    background: #e0e0e0;
    margin: 20px 0;
    display: none;
}

.tags-wrapper {
    width: 295px;
}

.tags-belong-title {
    display: flex;
    gap: 30px;
}

@media (max-width: 1024px) {
    .blog-container {
        padding: 4vh 4vw 0;
        
    }
    .blog-sidebars {
        display: flex;
        flex-direction: column;
    }

    .posts-wrapper {
        flex: 1;
        width: 100%;
    }

    .tags-wrapper {
        margin-top: 20px;
        margin-bottom: 40px;
        width: fit-content;
    }

    .separator {
        display: block;
    }
}
</style>

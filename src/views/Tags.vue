<template>
    <div class="blog">
        <Banner :title="'Tags'" :subtitle="'Find the posts with tags'"/>
        <div class="blog-container">
            <div class="inner-blog-container">
                <router-link :to="{ name: 'Blogs' }" class="back-link">
                    <i class="fas fa-angle-left"></i> Back to All Posts
                </router-link>
                <div class="blog-sidebars">
                    <div class="posts-wrapper">
                        <div class="tags-belong-title">
                            <div class="tags-title-wrap">
                            <h2>Posts that contain tag: </h2>
                            <div class="tags-list-in-title">
                                <TagItem v-for="tag in selectedTags" :key="tag" :tag="tag" :isSelected="selectedTags.includes(tag)" @toggle-tag="handleDelTag" />
                            </div>
                            </div>
                            <hr class="separator"/>
                        </div>
                        <PostList @posts="handleGetPosts" @toggle-tag="handleAddTag" :selectedTags="selectedTags" :resetPage="resetPage"/>
                    </div>
                    <div class="tags-wrapper">
                        <hr class="separator"/>
                        <BlogTags :posts="posts" :includeTags="tag" :tagUpdateCount="tagUpdateCount" :tagState="tagState" @selectedTags="handleSelectedTags"/>
                    </div>
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

import { onMounted, ref } from 'vue';

export default {
  props: ['tagId'],
  components: {
    Banner, PostList, BlogTags, TagItem
  },
  setup(props) {
    const posts = ref([]);
    const tag = ref(null);
    const tagState = ref(false);
    const selectedTags = ref([]);
    const resetPage = ref(true);
    const tagUpdateCount = ref(true);

    const handleGetPosts = (_posts) => {
        posts.value = _posts;
    }

    const handleAddTag = (_tag) => {
        if (_tag) {
            tag.value = _tag;
            tagState.value = true;
            tagUpdateCount.value = !tagUpdateCount.value;
        }
    }

    const handleDelTag = (_tag) => {
        if (_tag) {
            tag.value = _tag;

            tagState.value = false;
            tagUpdateCount.value = !tagUpdateCount.value;
        }
    }

    const handleSelectedTags = (_selectedTags) => {
        if (_selectedTags) {
            resetPage.value = !resetPage.value;
            selectedTags.value = _selectedTags;
        }
    }

    onMounted(() => {
      handleAddTag(props.tagId);
    });

    return { handleGetPosts, selectedTags, posts, tag, tagState, tagUpdateCount, resetPage, handleAddTag, handleDelTag, handleSelectedTags };
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
    align-items: flex-start;
    justify-content: space-between;
    position: relative;
}

.inner-blog-container {
    max-width: 1300px;
    margin: 0 auto;
    padding-bottom: 30px;
}

.posts-wrapper {
    width: calc(100% - 350px);
    padding-left: 0;
    padding-right: 0;
}

.tags-wrapper .separator {
    border: 0;
    height: 1px;
    background: #e0e0e0;
    margin: 20px 0;
    width: 100%;
    display: none;
}

.tags-wrapper {
    width: 295px;
}

.tags-belong-title {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.tags-title-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.tags-belong-title h2 {
    margin-right: 30px;
    font-size: 44px;
    display: inline;
}

.tags-list-in-title {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin: 10px 0 0;
}

.tags-belong-title .separator {
    border: 0;
    height: 1.5px;
    background: rgba(227,214,129, 0.6);
    margin: 50px 0;
    width: 100%;
}

.back-link {
    color: #FFA500;
    text-decoration: none;
    font-family: 'Open Sans', sans-serif;
    font-size: 1.2rem;
    display: inline-flex;
    align-items: center;
    margin-bottom: 30px;
    align-self: flex-start; 
}

.back-link i {
    margin-right: 8px;
    transform: translateY(15%);
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

    .tags-wrapper .separator {
        display: block;
    }

    .tags-belong-title h2 {
        font-size: 30px;
        margin-right: 0;
    }

    .tags-belong-title .separator {
        margin: 30px 0;
    }
}
</style>

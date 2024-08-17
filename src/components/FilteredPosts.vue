<template>
    <div class="filtered-post">
        <ul>
            <li v-for="post in filteredPosts" :key="post.name" class="post-item">
                <router-link :to="{ name: 'PostDetail', params: { id: post.name }}" class="post-link">
                    <div class="post-content">
                        <h3 class="post-title">{{ post.title }}</h3>
                        <p class="post-description">Read more...</p>
                        
                        <div class="post-tags">
                            <div class="post-tag-item" v-for="tag in post.tags" :key="tag">
                                <TagItem :tag="tag" :isSelected="false" @toggle-tag="handleTag" />
                            </div>
                        </div>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { ref, computed, onUpdated } from 'vue';
import TagItem from './Tag-item.vue';

export default {
    props: ['posts', 'titleSearch', 'selectedTags', 'currentPage', 'postsPerPage'],
    emits: ['totalPages', 'toggle-tag'],
    components: {
        TagItem
    },
    setup(props, { emit }) {
         const filteredPosts = computed(() => {
            let posts = props.posts;

            if (props.titleSearch) {
                posts = posts.filter(post =>
                    post.title.toLowerCase().includes(props.titleSearch.toLowerCase())
                );
            }

            if (props.selectedTags) {
                if (props.selectedTags.length === 0) {
                    return posts;
                }
                posts = posts.filter(post =>
                    props.selectedTags.every(tag => post.tags.includes(tag))
                );
            }

            return posts;
        });


        const paginatedPosts = computed(() => {
            const start = (props.currentPage - 1) * props.postsPerPage;
            const end = start + props.postsPerPage;
            return filteredPosts.value.slice(start, end);
        });

        const totalPages = computed(() => {
            return Math.ceil(filteredPosts.value.length / props.postsPerPage);
        });

        emit('totalPages', totalPages.value);
        onUpdated(() => {
            emit('totalPages', totalPages.value);
        })

        const handleTag = (tag) => {
            emit('toggle-tag', tag)
        }

        return { filteredPosts: paginatedPosts, totalPages, handleTag };
    }
}
</script>

<style>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.post-item {
  margin-bottom: 20px;
  border-radius: 12px;
  overflow: hidden;
  background-color: #fdfdfd; 
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  transform: translateY(-5px); 
  transition: box-shadow 0.3s ease, transform 0.3s ease, background-color 0.3s ease;
}

.post-item:hover h3 {
  text-decoration: underline;
}

.post-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.post-content {
  padding: 20px;
}

.post-title {
  font-size: 1.75rem;
  margin-bottom: 10px;
  color: #333;
  position: relative;
}

.post-description {
  font-size: 1rem;
  color: #666;
}

.post-tags {
  margin-top: 10px;
}

.post-tag {
  display: inline-block;
  padding: 6px 12px;
  margin: 0 5px 5px 0;
  background-color: #ffeb3b;
  color: #333;
  border-radius: 12px;
  font-size: 0.875rem;
  font-weight: 500;
  transition: background-color 0.3s ease;
}

.post-tag:hover {
  background-color: #fdd835;
}

.post-tag-item {
    margin-right: 10px;
    display: inline-flex;
}
 
</style>
<template>
  <div class="post-wrapper">
    <div class="post">
        <div class="search-bar">
            <input v-model="searchQuery" @input="resetCurrentPage" type="text" placeholder="Search posts..." />
            <i v-if="searchQuery" class="fas fa-times clear-icon" @click="clearSearch"></i>
        </div>
        <FilteredPosts :posts="posts" :titleSearch="searchQuery" :selectedTags="selectedTags" :currentPage="currentPage" :postsPerPage="postsPerPage" @totalPages="handleTotalPages" @toggle-tag="handleTag"/>
        <Pagination :currentPage="currentPage" :totalPages="totalPages" @newPage="handlePage"/>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import Pagination from './Pagination.vue';
import FilteredPosts from './FilteredPosts.vue';
import postsData from '@/assets/data/posts.json';

export default {
  components: {
    Pagination, FilteredPosts
  },
  props: [ 'selectedTags', 'resetPage' ],
  emits: ['posts', 'toggle-tag'],
  setup(props, { emit }) {
    const posts = ref(postsData);

    const searchQuery = ref("");
    const currentPage = ref(1);
    const totalPages = ref(0);
    const postsPerPage = 3;

    function resetCurrentPage() {
      currentPage.value = 1;
    }

    const handlePage = (page) => {
      currentPage.value = page;
    }

    const handleTotalPages = (pages) => {
      totalPages.value = pages;
    }

    const clearSearch = () => {
      searchQuery.value = "";
      resetCurrentPage();
    }

    emit('posts', posts.value);

    const handleTag = (tag) => {
        emit('toggle-tag', tag);
    }

    watch(() => props.resetPage, () => {
        resetCurrentPage();
    });
    
    return {
      posts,
      postsPerPage,
      searchQuery,
      currentPage,
      totalPages,
      resetCurrentPage,
      handlePage,
      handleTotalPages,
      handleTag,
      clearSearch
    };
  },
};
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');

.post {
  max-width: 1200px;
  margin: 0 auto;
}

.search-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
}

.search-bar input {
  width: 100%;
  padding: 10px;
  border: 2px solid #ffd54f;
  border-radius: 8px;
  font-size: 1.1rem;
  outline: none;
}

.clear-icon {
  position: absolute;
  right: 10px;
  cursor: pointer;
  color: #999;
  font-size: 1.2rem;
}
</style>

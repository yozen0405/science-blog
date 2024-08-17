<template>
  <div class="blog-tags">
    <h5>Tags</h5>
    <div class="blog-tags-wrapper">
        <div class="tags-list">
            <div v-for="tag in getPostTags" :key="tag" class="list-item">
                <TagItem :tag="tag" :isSelected="selectedTags.includes(tag)" @toggle-tag="toggleTag" />
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch, onUpdated } from 'vue';
import TagItem from './Tag-item.vue';

export default {
    props: ['posts', 'includeTags', 'tagUpdateCount', 'tagState'],
    components: {
        TagItem
    },
    emits: ['selectedTags'],
    setup(props, { emit }) {
        const getPostTags = computed(() => {
            if (!props.posts) {
                return [];
            }
            const allTags = props.posts.flatMap(post => post.tags);
            return [...new Set(allTags)];
        });

        const selectedTags = ref([]);

        const toggleTag = (tag) => {
            const index = selectedTags.value.indexOf(tag);
            if (index > -1) {
                selectedTags.value.splice(index, 1);
            } else {
                selectedTags.value.push(tag);
            }
        };

        watch(() => props.tagUpdateCount, () => {
            const newTag = props.includeTags;
            if (newTag && props.tagState && !selectedTags.value.includes(newTag)) {
                selectedTags.value.push(newTag);
            } else if (newTag && !props.tagState) {
                const index = selectedTags.value.indexOf(newTag);
                if (index > -1) {
                    selectedTags.value.splice(index, 1);
                }
            }
        });
        
        onUpdated(() => {
            emit('selectedTags', selectedTags.value);
        });

        return { getPostTags, selectedTags, toggleTag };
    }
};
</script>


<style scoped>
    h5 {
        color: #000;
        margin-top: 0;
        margin-bottom: 0;
        font-size: 20px;
        font-weight: 700;
        line-height: 130%;
    }

    .tags-list {
        display: flex;
        flex-wrap: wrap;
        margin-top: 20px;
    }

    .list-item {
        margin-bottom: 10px;
        margin-right: 10px;
    }
</style>

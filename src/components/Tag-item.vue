<template>
    <div class="tag-item-container" :class="{ 'selected-tag': isSelected }" @click.prevent="handleClick">
        <div class="tag-item">
            <p>{{ tag }}</p>
            <i v-if="isSelected" class="fas fa-times"></i>
        </div>
    </div>
</template>

<script>
export default {
    props: ['tag', 'isSelected'],
    emits: ['toggle-tag'],
    setup(props, { emit }) {
        const handleClick = () => {
            emit('toggle-tag', props.tag);
        }

        return { handleClick };
    }
}
</script>

<style>
    .tag-item-container {
        background-color: #fdeeb3;
        border-radius: 3px;
        padding: 6px 12px;
        font-size: 14px;
        font-weight: 500;
        max-width: 100%;
        display: inline-block;
        color: #9c7b03;
        text-decoration: none;
        position: relative;
        cursor: pointer;
        user-select: none;
    }

    .tag-item {
        display: flex;
        align-items: center;
    }

    .tag-item-container:hover {
        background-color: rgb(247, 223, 126);
    }

    .tag-item-container.selected-tag {
        background-color: rgb(247, 223, 126);
    }

    .tag-item p {
        display: inline;
        margin: 0;
    }

    .tag-item i {
        margin-left: 10px;
        color: #9c7b03;
        transform: translateY(-5%);
    }
</style>
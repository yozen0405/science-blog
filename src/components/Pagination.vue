<template>
    <div class="pagination">
        <div class="btn-section">
            <button class="change-page" @click="prevPage" :disabled="currentPage === 1"><i class="fas fa-chevron-left"></i></button>
            <button v-for="page in pageBtnGenerate" :key="page" @click="goToPage(page)" :class="{ active: page === currentPage }" class="page-btn">
                {{ page }}
            </button>
            <button class="change-page" @click="nextPage" :disabled="currentPage === totalPages || totalPages === 0"><i class="fas fa-chevron-right"></i></button>
        </div>
        <div class="page-text-display">
            <p v-if="totalPages">Page {{ currentPage }} of {{ totalPages }}</p>
            <p v-else>No post found</p>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';

export default {
    props: ['currentPage', 'totalPages'],
    emits: ['newPage'],
    setup(props, { emit }) {
        const pageBtnGenerate = computed(() => {
            let currentPage = props.currentPage;
            let totalPages = props.totalPages;
            let pages = [];
            const range = 1;

            for (let i = Math.max(1, currentPage - range); i <= Math.min(totalPages, currentPage + range); i++) {
                pages.push(i);
            }

            if (currentPage + range > totalPages) {
                let start = pages[0];
                while (pages.length < range * 2 + 1 && start > 1) {
                    start--;
                    pages.unshift(start);
                }
            }
            if (currentPage - range < 1) {
                let end = pages[pages.length - 1];
                while (pages.length < range * 2 + 1 && end < totalPages) {
                    end++;
                    pages.push(end);
                }
            }

            return pages;
        });

        function goToPage(page) {
            emit('newPage', page);
        }

        function prevPage() {
            if (props.currentPage > 1) {
                emit('newPage', props.currentPage - 1);
            }
        }

        function nextPage() {
            if (props.currentPage < props.totalPages) {
                emit('newPage', props.currentPage + 1);
            }
        }

        return {
            pageBtnGenerate,
            goToPage,
            prevPage,
            nextPage
        }
    }
}
</script>

<style>
.pagination {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.pagination .btn-section {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
}

.pagination .btn-section button {
    margin: 0 5px;
    padding: 10px 15px;
    cursor: pointer;
    color: black;
    font-size: 1.2rem;
    background-color: #ffffff;
    border: 2px solid #ffcc00;
    border-radius: 8px;
}

.pagination .btn-section .page-btn:hover {
    transition: background-color 0.3s ease, color 0.3s ease;
    background-color: #ffcc00; 
    color: #ffffff;
}

.pagination .btn-section .page-btn.active {
    background-color: #ffcc00;
    color: #ffffff;
}

.pagination .btn-section .change-page:disabled {
    opacity: 0.5;
    background-color: #ffffff;
    color: #180000;
    cursor: auto;
}

.pagination .btn-section .change-page i {
    font-size: 1rem;
}
</style>
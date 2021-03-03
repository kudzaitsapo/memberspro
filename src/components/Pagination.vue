<template>
        <nav aria-label="Page navigation" v-if="totalPages() > 0" class="pagination-wrapper">
            <ul class="pagination">
                <li  v-if="showPreviousLink()" class="page-item"><a class="page-link" v-on:click="updatePage(currentPage - 1)" href="#">Previous</a></li>
                <li class="page-item disabled"><a class="page-link" href="#">{{ currentPage + 1 }} of {{ totalPages() }}</a></li>
                <li v-if="showNextLink()" class="page-item"><a class="page-link" v-on:click="updatePage(currentPage + 1)" href="#">Next</a></li>
            </ul>
        </nav> 
</template>

<script>
export default {
    name: 'Pagination',
    props: ['totalObjects', 'currentPage', 'pageSize'],
    methods: {
        updatePage(pageNumber) {
            this.$emit('page:update', pageNumber);
        },
        totalPages() {
            return Math.ceil(parseInt(this.totalObjects) / this.pageSize);
        },
        showPreviousLink() {
        return this.currentPage == 0 ? false : true;
        },
        showNextLink() {
        return this.currentPage == (this.totalPages() - 1) ? false : true;
        }
    }
}
</script>

<style scoped>
    .pagination-btn {
        cursor: pointer;
    }
</style>
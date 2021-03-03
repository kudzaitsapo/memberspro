<template>
    <div>
        <div class="p-2 text-monospace h3 text-center mb-0">
            <div class="bg-white rounded shadow p-3 h-100">Members</div>
        </div>
        <paginated-members v-bind:group-members="visibleMembers" />

        <div class="overflow-auto mt-4 ml-3">
            <pagination
                v-on:page:update="updatePage"
                v-bind:totalObjects="totalObjects"
                v-bind:currentPage="currentPage"
                v-bind:pageSize="10">
            </pagination>
        </div>
    </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';
import PaginatedMembers from './PaginatedMembers';
import Pagination from './Pagination';
import _ from 'lodash';

export default {
    name: 'Members',
    components: {
        PaginatedMembers,
        Pagination
    },
    data(){
        return {
            currentPage: 0,
            totalObjects: 1,
            visibleMembers: []
        }
    },
    methods: {
        ...mapActions(['fetchMembers']),
         groupVisibleMembers() {
            return _.chunk(this.allMembers.data, 4);
        },
        updateVisibleMembers(){
            this.fetchMembers(this.currentPage);
            this.visibleMembers = this.groupVisibleMembers();
        },
        updatePage(pageNumber){
            this.currentPage = pageNumber;
            this.updateVisibleMembers();
        }
    },
    computed: {
        ...mapGetters(['allMembers']),
         groupMembers() {
            return _.chunk(this.allMembers.data, 4);
        },
    },
    created(){
        this.fetchMembers(this.currentPage);
        this.totalObjects = this.allMembers.total;
        this.updateVisibleMembers();
    }
}
</script>
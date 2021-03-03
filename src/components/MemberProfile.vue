<template>
    <div>
        <div class="p-2 text-monospace h3 text-center mb-0">
            <div class="bg-white rounded shadow p-3 h-100">Members</div>
        </div>
        <b-container fluid class="bv-example-row mt-4">
           <b-card>
               <b-row>
                   <b-col cols="3">
                       <b-img thumbnail fluid :src="singleMember.picture" class="w-100" alt="User Image"></b-img>
                   </b-col>
                   <b-col cols="6" class="text-left">
                       <h5>{{ singleMember.id }}</h5>
                       <h3>{{ singleMember.title }}. {{ singleMember.firstName }} {{ singleMember.lastName }}</h3>
                       <span class="h5">Gender:</span>  <span>{{ singleMember.gender }}</span><br>
                       <span class="h5">Email:</span>  <span>{{ singleMember.email }}</span><br>
                       <span class="h5">Phone:</span>  <span>{{ singleMember.phone }}</span><br>
                       <span class="h5">Date of Birth:</span>  <span>{{ singleMember.dateOfBirth | format }}</span><br>
                       <span class="h5">Date Registered:</span>  <span>{{ singleMember.registerDate | format }}</span><br><br>
                       <b-button :to="{ name: 'Home'}" variant="warning">Back</b-button>
                   </b-col>
                   <b-col>
                       <b-img v-bind="mainProps" class="w-100 h-100" rounded="0" alt="Google Maps Goes here"></b-img>
                   </b-col>
               </b-row>
            </b-card>
        </b-container>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import moment from 'moment';

export default {
    name: 'MemberProfile',
    data(){
        return {
            mainProps: { blank: true, blankColor: '#777', width: 95, height: 105, class: 'm1' }
        }
    },
    methods: {
        ...mapActions(['fetchSingleMember'])
    },
    computed: mapGetters(['singleMember']),
    created(){
        this.fetchSingleMember(this.$route.params.id);
    },
    filters: {
        format: function(value) {
            if (value) {
                return moment(String(value)).format('MMMM d, YYYY');
            }
        }
    }
}
</script>
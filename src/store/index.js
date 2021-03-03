import Vuex from 'vuex';
import Vue from 'vue';
import members from './modules/members';

Vue.use(Vuex);

// Creating the store
export default new Vuex.Store({
    modules: {
        members
    }
});
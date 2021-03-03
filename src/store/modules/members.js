import axios from 'axios';
import NProgress from 'nprogress';
import { BASE_URI, USERS_URI, APP_ID } from './constants';

const instance = axios.create({
    baseURL: BASE_URI,
    headers: {
        'app-id': APP_ID
    }
});

// before a request is made start the nprogress
instance.interceptors.request.use(config => {
    NProgress.start();
    return config;
});
  
// before a response is returned stop nprogress
instance.interceptors.response.use(response => {
    NProgress.done();
    return response;
});

const state = {
    memberData: {},
    selectedMember: {}
};

const getters = {
    allMembers: (state) => state.memberData,
    singleMember: (state) => state.selectedMember
};

const actions = {
    async fetchMembers({ commit }, page) {
        const apiResponse = await instance.get(`${USERS_URI}?limit=10&page=${page}`);
        commit('setMembers', apiResponse.data);
    },

    async fetchSingleMember({ commit }, userId) {
        const apiResponse = await instance.get(`${USERS_URI}/${userId}`);

        commit('setSelectedMember', apiResponse.data);
    }

};

const mutations = {
    setMembers: (state, memberData) => (state.memberData = memberData),
    setSelectedMember: (state, selectedMember) => (state.selectedMember = selectedMember)
};

export default {
    state,
    getters,
    actions,
    mutations
};


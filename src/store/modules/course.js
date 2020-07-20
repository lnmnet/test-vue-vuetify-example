import { COURSES, COURSE_INPUT, COURSE_DELETE } from "../actions.type"
import { FETCH_START, FETCH_END } from "../mutations.type"
import ApiService from "@/common/api.service"

const state = {
  course: {},
  courses: [],
  isLoading: true,
};

const getters = {
  isLoading (state) {
    return state.isLoading
  },

  courses (state) {
    return state.courses
  }
}

const actions = {
  async [COURSES] ({ commit }) {
    commit(FETCH_START);
    await ApiService.get('/courses').then(({ data }) => {
      commit(FETCH_END, data)
    });
  },

  async [COURSE_INPUT] ({ commit }, params) {
    
    commit(FETCH_START);
    const { data } = params.hasOwnProperty('_id') 
                    ? await ApiService.put(`/course`, params)
                    : await ApiService.post('/course', params)
    commit(FETCH_END, data)
  },

  async [COURSE_DELETE] ({ commit }, slug) {
    commit(FETCH_START);
    await ApiService.delete(`/course/${slug}`).then(({ data }) => {
      commit(FETCH_END, data);
    })
  }
};

const mutations = {
  [FETCH_START] (state) {
    state.isLoading = true;
  },

  [FETCH_END] (state, data) {
    // setTimeout(() => {
      
      state.isLoading = false;
      state.courses = data;
    // }, 3000);
  }
}

export default { state, actions, mutations, getters }



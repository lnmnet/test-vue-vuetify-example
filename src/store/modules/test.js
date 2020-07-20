import ApiService from '@/common/api.service'
import { FETCH_PETS } from "@/store/actions.type"
import { FETCH_START, FETCH_END } from "@/store/mutations.type"

const url = 'http://5c92dbfae7b1a00014078e61.mockapi.io/owners';

const state = {
  isLoading1: true,
  items: [],
  pets: [],
};

const actions = {
  async [FETCH_PETS] ({ commit }) {
    commit(FETCH_START);
    await ApiService.get(url).then(({ data }) => {
console.log('data:::', data);
      
      commit(FETCH_END, data);
    })
    
  }
};

const getters = {
  isLoading (state) {
    return state.isLoading1;
  },

  pets (state) {
    const items = state.items;
    let pets = [];
    if (items.length) {
      console.log(items, pets);
    }
  }
};

const mutations = {
  [FETCH_START] (state) {
    state.isLoading = true;
  },

  [FETCH_END] (state, data) {
    state.isLoading = false;
    state.items = data
  }
};

export default { state, actions, getters, mutations }
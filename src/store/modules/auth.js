import { LOGIN } from "@/store/actions.type"
// import Vue from 'vue'
// import axios from "axios";
import ApiService from "@/common/api.service"

const state = {
  user: {},
};

const actions = {
  
  async [LOGIN](context, credentials) {
    console.log('credentials', credentials);
    // return await axios.post('http://localhost:3000/api/login', credentials);
    return await ApiService.post('/login', credentials);
  }
};

const mutations = {

};


export default { state, actions, mutations }
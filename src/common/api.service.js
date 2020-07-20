import Vue from 'vue';
import axios from "axios";
import VueAxios from "vue-axios";
import { API_URL } from "@/common/config";
import JwtService from "@/common/jwt.service"

const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = API_URL;

//     Vue.axios.interceptors.request.use(
//       config => {
//         console.log('interceptors.....', config);
        
//         return config;
//       },
//       error => {
//         return Promise.reject(error)
//       }
//     );

//     Vue.axios.interceptors.response.use(
//       response => {
// console.log('response...', response);
        
//         return response
//       },
//       error => {
//         if (error.response) {
//           console.log(error.response.status);
//         }
//         return Promise.reject(error.response.data);
//       }
//     )
  },

  setHeader() {
    Vue.axios.defaults.headers.common['Authorization'] = `Token ${JwtService.getToken()}`
  },

  async get(resource, slug = '') {
    return await Vue.axios.get(`${resource}/${slug}`).catch(error => {
      throw new Error(` ApiService ${error}`);
    })
  },

  async post(resource, params) {
    return await Vue.axios.post(resource, params);
  },

  async update(resource, slug, params) {
    return await Vue.axios.put(`${resource}/${slug}`, params);
  },

  async put(resource, params) {
    return await Vue.axios.put(resource, params);
  },

  async delete(resource) {
    return await Vue.axios.delete(resource).catch(error => {
      throw new Error(` ApiService ${error}`);
    })
  }

}

export default ApiService;
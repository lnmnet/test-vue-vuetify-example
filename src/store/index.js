import Vue from 'vue'
import Vuex from 'vuex'

import navigation from '@/store/modules/navigation'
import auth from '@/store/modules/auth'
import course from '@/store/modules/course'
import dialog from '@/store/modules/dialog'
import test from '@/store/modules/test'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    navigation,
    auth,
    course,
    dialog,
    test
  }
})
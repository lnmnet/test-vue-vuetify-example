import Vue from 'vue'

const state = {
  menus: [
    {
      label: '',
      categories: [
        { 
          text: 'Example',
          icon: 'extension',
          child: [
            { text: 'List', path: 'examples' },
            { text: 'Add', path: 'example' },
          ]
        }
      ]
    },
    {
      label: '',
      categories: [
        { text: '课程管理', icon: 'dvr', path: 'courses' }
      ]
    },
    {
      label: '用户服务',
      categories: [
        {
          text: '用户账户服务',
          icon: 'assignment_ind',
          child: [
            { text: '角色服务', path: '--' },
            { text: '权限服务', path: '--' }
          ]
        },
        {
          text: '商户服务',
          icon: 'card_giftcard',
          child: [
            { text: '角色服务', path: 'admin/user' },
            { text: '权限服务', path: '--' }
          ]
        }
      ]
    },
    {
      label: '计费服务',
      categories: [
        {
          text: '商户计费服务',
          icon: 'chrome_reader_mode',
          child: [
            { text: '商户费率', path: '' },
            { text: '商户费率查询', path: '' },
            { text: '商户交易手续费计算', path: '' },
          ]
        },
        {
          text: '代理商计费服务',
          icon: 'assignment',
          child: [
            { text: '代理商成本', path: '' },
            { text: '单笔交易代理商成本计算', path: '' },
          ]
        }
      ]
    },
    {
      label: '帮助中心',
      categories: [{ text: '帮助', icon: 'help', path: 'help' }]
    },
    {
      categories: [{ text: 'Test', icon: 'settings_ethernet', path: 'test' }]
    }
  ],
  breadcrumbs: [],
  drawer: null,
};

const getters = {

};

const actions = {
  changeRouter({ commit }, path) {
    commit('changeRouter', path)
  }
};

const methods = {
  setBreadcrumbs(arr) {
    arr.unshift({ text: '首页' });
    state.breadcrumbs = arr;
  }
}

const mutations = {
  changeRouter(state, { path }) {
    let breadcrumbs = [];

    const routePath = path.split('/');
    if (routePath.length >= 3) {
      const [,, path] = routePath;
      state.menus.map(menu => {
        menu.categories.map(cate => {
          if (cate.path === path) {
            Vue.set(cate, 'active', true);
            menu.label && breadcrumbs.push({ text: menu.label });
            breadcrumbs.push({ text: cate.text })
          } else {
            cate.path && Vue.set(cate, 'active', false);
            if (cate.child && cate.child.length) {
              cate.child.map(child => {
                Vue.set(child, 'active', false);
  
                if (child.path === path) {
                  Vue.set(child, 'active', true);
                  Vue.set(cate, 'open', true);
                  
                  menu.label && breadcrumbs.push({ text: menu.label });
                  breadcrumbs.push({ text: cate.text });
                  breadcrumbs.push({ text: child.text })
                }
              })
            }
          }
          
        })
      })
      methods.setBreadcrumbs(breadcrumbs);
    }
  },

  toggleDrawer(state) {
    state.drawer = !state.drawer  
  }


};

export default { state, getters, actions, mutations }
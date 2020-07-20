import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import zhHans from 'vuetify/es5/locale/zh-Hans'

Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    locales: { zhHans },
    current: 'zhHans',
  },
  icons: {
    iconfont: 'mdi'
  },
  theme: {
    // Enabling customProperties will also generate a css variable for each theme color, 
    // which you can then use in your components' <style> blocks.
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: '#ffc107',
        // primary: '#1976D2',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        // secondary: colors.red.lighten4, // #FFCDD2
        // accent: colors.indigo.base, // #3F51B5
      },
      dark: {
        primary: '#00BCD4'
      }
    },
  },
});

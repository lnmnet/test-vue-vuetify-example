<template><v-app><router-view /></v-app></template>

<script>
import { settings } from '@/common/config'
export default {
  name: 'App',

  components: {
  },

  data: () => ({
  }),

  created() {
    const themeName = localStorage.theme || settings.theme;
    this.$vuetify.theme[themeName] = true;
    localStorage.theme = themeName;
  }

};
</script>

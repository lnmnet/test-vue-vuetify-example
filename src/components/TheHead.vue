<template>
  <v-app-bar app clipped-left color="primary">
    
    <v-btn icon @click="toggleDrawer">
      <v-icon>menu</v-icon>
    </v-btn>
    <span class="title ml-3 mr-5">
      Google&nbsp;
      <span class="font-weight-light">Keep</span>
    </span>

    <v-spacer />

    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on"><v-icon>account_circle</v-icon></v-btn>
      </template>
      <span>Admin</span>
    </v-tooltip>

    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on" @click="logout"><v-icon>exit_to_app</v-icon></v-btn>
      </template>
      <span>Exit</span>
    </v-tooltip>
  </v-app-bar>
</template>

<script>
export default {
  name: 'TheHead',

  methods: {
    toggleDrawer() {
      this.$store.commit('toggleDrawer', { drawer: this.$store.state.navigation.drawer});
    },

    logout() {
      this.$router.push('/login')
    }
  }
}
</script>
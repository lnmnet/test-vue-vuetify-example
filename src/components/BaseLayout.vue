<template>
  <v-content>
    <v-responsive class="mx-auto overflow-visible responsive-wrap">
      <v-breadcrumbs :items="items" class="breadcrumbs pl-0"/>
      <router-view/>
    </v-responsive>
  </v-content>
</template>


<script>
export default {
  name: 'base-layout',
  computed: {
    items() {
      return this.$store.state.navigation.breadcrumbs
    }
  }
}
</script>
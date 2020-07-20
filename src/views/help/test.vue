<template>
  <h1>Test</h1>
</template>

<script>
import { FETCH_PETS } from "@/store/actions.type"
import { mapGetters } from "vuex"

export default {
  name: 'pets',

  computed: {
    ...mapGetters(['isLoading', 'pets'])
  },

  created () {
    this.getPets();
  },

  methods: {
    getPets () {
      this.$store.dispatch(FETCH_PETS);
    }
  }
}
</script>
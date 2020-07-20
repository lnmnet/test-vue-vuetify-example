<template>
  <v-app id="admin">
    <TheHead />
    <TheMenu />
    <Base-layout />

    <!-- <msg-dialog /> -->
  </v-app>
</template>


<script>
import TheMenu from '@/components/TheMenu'
import TheHead from '@/components/TheHead'
import BaseLayout from '@/components/BaseLayout'
// import MsgDialog from '@/components/MsgDialog'

export default {
  name: 'admin',

  data: () => ({
    snackbar: true
  }),

  components: {
    TheHead,
    TheMenu,
    BaseLayout,
    // MsgDialog
  }
}
</script>



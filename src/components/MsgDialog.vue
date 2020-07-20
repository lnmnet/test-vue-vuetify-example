<template>
  <v-dialog v-model="$store.state.dialog.display" persistent width="290">
    <v-card>
      <div style="display: flex; padding: 16px 24px 10px;">
        <div><v-icon>highlight_off</v-icon></div>
        
        <div>Use Google</div>
      </div>
      <v-card-text>Let Google Help apps</v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="primary" text>CLOSE</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>


<script>
export default {
  name: 'msg-dialog',

  props () {
    
  }
}
</script>
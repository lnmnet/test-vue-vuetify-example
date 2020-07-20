<template>
  <div>
  <v-card class="pa-4">
  <v-form v-model="valid" ref="form">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="First name" required></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="10"
            label="Last name"
            required></v-text-field>
        </v-col>
      </v-row>

      <v-row >
        <v-col md="8">
          <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col md="8">
          <v-select v-model="select"
            :items="items"
            :rules="[v=> !!v || 'Item is required']"
            label="Item"
            required />
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-checkbox v-model="checkbox"
            :rules="[v => !!v || 'You must agree to continue!']"
            label="Do you agree?"
            required />
        </v-col>
      </v-row>


    
  

    <v-btn :disabled="!valid"
        color="primary"
        @click="validate">
      Submit
    </v-btn>
   
      
      
    </v-container>
  </v-form>
  </v-card>
  </div>
</template>

<script>
export default {
  name: "example-input",

  data: () => ({
    valid: false,
    firstname: '',
    lastname: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less then 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ],
    select: null,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
    ],
    checkbox: false,
  }),

  methods: {
    validate() {
      console.log(this.$refs.form.$data());
      
    }
  }

};
</script>
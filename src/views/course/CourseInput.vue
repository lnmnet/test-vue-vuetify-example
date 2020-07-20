<template>
  <v-responsive class="mx-auto overflow-visible">
    <!-- <v-breadcrumbs :items="items" class="pl-0" /> -->
    <span class="headline font-weight-light mb-2">课程添加</span>

    <v-text-field
            label="Outlined"
            placeholder="Placeholder"
            outlined
          ></v-text-field>

    

    <v-card>
      <v-form v-model="valid">
        <v-container>
          <v-row>
            
            <v-text-field class="col-md-10" v-model="name"
              :rules="nameRules"
              :counter="50" 
              label="课程名称"
              required/>
            <v-btn color="primary">Submit</v-btn>
          </v-row>
        </v-container>
      </v-form>
    </v-card>

    <v-divider class="my-9"/>

    <span class="display-1 font-weight-light">用户列表</span>

    <v-card class="mt-2">
      <v-divider />
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Name</th>
              <th class="text-left">Calories</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in desserts" :key="item.name">
              <td>{{ item.name }}</td>
              <td>{{ item.calories }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
    
  </v-responsive>
</template>


<script>
export default {
  data: () => ({
    nameRules: [],
    valid: false,
    name: '',
    desserts: []
  })
}
</script>
<template>
  <v-card  class="elevation-2">
    <v-card-title>
      
      <v-text-field v-model="search" 
        class="mr-4 font-weight-light"
        prepend-inner-icon="search"
        label="检索" 
        single-line 
        hide-details
        clearable
        dense></v-text-field>
      <v-spacer />

      <v-dialog v-model="dialog" max-width="600px" persistent>
        <template v-slot:activator="{ on }">
          <v-btn color="primary text--secondary" v-on="on">添加课程</v-btn>
        </template>
        <v-form ref="form" v-model="valid">
          <v-card>
            <v-card-title>
              <span class="headlin font-weight-light">{{ formTitle }}</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field label="课程编码" maxlength="10"
                      v-model="inputItem.numb"
                      :counter="10"
                      :rules="inputRules.numb"
                      required />
                  </v-col>
                  <v-col cols="12" sm="6" md="8">
                    <v-text-field label="课程名称" maxlength="50"
                      v-model="inputItem.name" 
                      :counter="50"
                      :rules="inputRules.name"
                      required />
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-divider class="mt-12"></v-divider>
            <v-card-actions class="py-4 px-6">
              <v-spacer></v-spacer>
              <v-btn color="darken-1" text outlined @click="dialog = false" >取消</v-btn>
              <v-btn @click="reset" color="success" depressed>RESET</v-btn>
              <v-btn color="primary text--secondary" :disabled="!valid" @click="saveItem">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-dialog>
    </v-card-title>

    <v-data-table :items="courses" :headers="headers" :loading="isLoading" :search="search">
      <template v-slot:item.action="{ item }" class="test">
        <v-icon small class="mr-2" @click="editItem(item)">edit</v-icon>
        <v-icon small @click="deleteItem(item)">delete</v-icon>
      </template>
    </v-data-table>
 
  </v-card> 
 
</template>


<script>
import { COURSES, COURSE_INPUT, COURSE_DELETE} from "../../store/actions.type";
import { mapGetters } from "vuex";
export default {
  name: 'courseList',

  data: () => ({
    valid: true,
    dialog: false,
    search: '',
    editedIndex: -1,
    numb: '',
    name: '',
    inputItem: { numb: '', name: '' },
    editedItem: {},
    inputRules: {
      numb: [ v => !!v || '请填写课程编号' ],
      name: [ v => !!v || '请填写课程名称' ]
    },
    headers: [
      { text: '课程编号', value:  'numb' },
      { text: '课程名称', value:  'name' },
      { text: '操作', value: 'action', sortable: false, width: 86,  }
    ]
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? '课程添加' : '课程编辑'
    },
    ...mapGetters(['isLoading', 'courses'])
  },

  created () {
    this.getItems();
  },

  methods: {
    close () {
      this.dialog = false;
      this.editedIndex = -1;
      this.reset();
    },

    getItems () {
      this.$store.dispatch(COURSES);
    },

    saveItem () {
      if (this.$refs.form.validate()) {
        this.$store.dispatch(COURSE_INPUT, this.inputItem);
        this.close();
      }
    },

    editItem (item) {
      this.editedIndex = this.$store.state.course.courses.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.inputItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem (item) {
      confirm('确定要删除这条数据吗？') && this.$store.dispatch(COURSE_DELETE, item._id);
    },

    reset () {
      this.editedIndex > -1
        ? this.inputItem = Object.assign({}, this.editedItem)
        : setTimeout(() => { this.$refs.form.reset() }, 300)
    }
  }
  
}
</script>


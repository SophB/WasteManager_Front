<template>
  <v-container class="inputFile">
    <v-row class="text-center">
      <v-col cols="2"></v-col>
      <v-col cols="8">
        <v-file-input
          type="file"
          id="file"
          ref="file"
          v-on:change="handleFileUpload()"
          autofocus
          chips
          clearable
          outlined
          dense
          shoow-size
          prepend-icon="mdi-file"
          hint=" Provide a .json file, and get your report"
        ></v-file-input
      ></v-col>

      <v-col cols="2">
        <v-btn fab dark color="indigo" v-on:click="submitFile()">
          <v-icon dark> mdi-plus </v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "InputFile",
  data() {
    return {
      file: "",
    };
  },
  methods: {
    submitFile() {
      let formData = new FormData();
      formData.append("file", this.file);

      //     axios.post( '/single-file',
      //         formData,
      //         {
      //         headers: {
      //             'Content-Type': 'multipart/form-data'
      //         }
      //       }
      //     ).then(function(){
      //   console.log('SUCCESS!!');
      // })
      // .catch(function(){
      //   console.log('FAILURE!!');
      // });
    },

    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },
  },
};
</script>
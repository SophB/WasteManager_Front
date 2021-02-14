<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1 class="display-2 font-weight-bold">Welcome to Waste Manager</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-img
        :src="require('../assets/WasteManagement.png')"
        class="my-3"
        contain
        height="150"
      />
    </v-row>
    <v-row class="text-center">
      <v-col cols="12">
        <p class="subheading font-weight-regular">
         This app will analisys waste managing possibilities
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Title",
};
</script>

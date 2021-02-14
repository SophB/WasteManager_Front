<template>
  <v-app>
    <v-app-bar
      app
      color="indigo"
      dark
    >Waste Manager</v-app-bar>

    <v-main>
      <Title/>
      <InputFile />
      <Report />
    </v-main>
  </v-app>
</template>

<script>
import Title from '@/components/Title.vue';
import InputFile from '@/components/InputFile.vue';
import Report from '@/components/Report.vue';

export default {
  name: 'App',

  components: {
    Title,
    InputFile,
    Report
  },

  data: () => ({
    //
  }),
};
</script>

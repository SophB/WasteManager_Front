<template>
  <div class="report" >
    <button @click="toogleDisplay()">Toogle Report</button>

    <h1 v-show="this.isDisplayed">Report</h1>

    <v-table>
      </v-table>
  </div>
</template>

<script>
export default {
  name: "Report",
  props: {},
  data() {
    return {
      isDisplayed: true,
    };
  },
  methods: {
    toogleDisplay() {
      this.isDisplayed = !this.isDisplayed;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.report {
  margin-top: 10px;
}
</style>

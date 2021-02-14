<template>
  <v-container class="report">
    <v-row>
      <v-btn dark color="indigo" @click="toogleDisplay()">
        Toogle Report
      </v-btn>
    </v-row>
    <v-row v-show="this.isDisplayed">
      <v-data-table
        :headers="headers"
        :items="desserts"
        :items-per-page="5"
        class="elevation-1"
      ></v-data-table>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Report",
  props: {},
  data() {
    return {
      isDisplayed: true,
      headers: [
        {
          text: "Dessert (100g serving)",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Iron (%)", value: "iron" },
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%",
        },
      ],
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

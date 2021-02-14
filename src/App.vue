<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <InputFile />

    <Report />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import InputFile from "@/components/InputFile.vue";
import Report from "@/components/Report.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    InputFile,
    Report
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div id="wrapper">
    <Card />
    <div class="love" v-on:click="go">
      <span>Made with</span>
      <span class="material-icons">favorite</span>
      <span>by amir</span>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card";

export default {
  name: "Home",
  components: {
    Card,
  },
  methods: {
    go() {
      window.open("https://github.com/codacy20", "_blank");
    },
  },
};
</script>
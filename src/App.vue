<template>
  <div id="app">
    <Card/>
    <div class="love" v-on:click="go">
      <span>Made with</span>
      <span class="material-icons">favorite</span>
      <span>by amir</span>
    </div>
  </div>
</template>

<script>
import Card from "./components/Card";

export default {
  name: "App",
  components: {
    Card
  },
  methods: {
    go() {
      window.open("https://mobile.twitter.com/RT_Amir", "_blank");
    }
  }
};
</script>

<style>
#app {
  background: #E8EAEE;
  width: 99vw;
  height: 98.3vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.love {
  display: flex;
  width: 170px;
  justify-content: space-evenly;
  align-items: center;
  line-height: 40px;
  position: absolute;
  bottom: 0;
  cursor: pointer;
}
.love:hover .material-icons {
  color: red;
}
</style>

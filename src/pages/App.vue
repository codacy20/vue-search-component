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
import Card from "../components/Card";

export default {
  name: "App",
  components: {
    Card
  },
  methods: {
    go() {
      window.open("https://github.com/codacy20", "_blank");
    }
  }
};
</script>

<style>
* {
  font-family: nunito-sans, sans-serif;
  font-style: normal;
  font-weight: 200;
  outline: none;
  user-select: none;
  box-sizing: border-box;
}

#app {
  background: #E8EAEE;
  width: 100%;
  height: 100%;
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

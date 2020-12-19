<template>
  <div id="app">
    <router-view />
    <div class="love" v-on:click="go">
      <span>Made with</span>
      <span class="material-icons">favorite</span>
      <span>by amir</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    go() {
      window.open("https://github.com/codacy20", "_blank");
    },
  },
};
</script>
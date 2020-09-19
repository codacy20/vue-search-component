<template>
  <div id="footer-container">
    <div id="footer-wrapper">
      <span id="footer-one">#123 results</span>
      <a v-bind:href="artist.url" target="_blank">
        <span>show me the collection</span>
        <span class="material-icons">keyboard_arrow_right</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: ["artist"],
  created() {
    // console.log(this.artist);
  }
};
</script>

<style>
#footer-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 84px;
}
#footer-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  height: 100%;
}
a {
  text-decoration: none;
  color: black;
  display: flex;
}
#footer-one {
  color: #999FAA;
}
</style>

<template>
  <div id="footer-container">
    <div id="footer-wrapper">
      <span id="footer-one">{{nr}} results</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: ["collection", "nr"],
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
  align-items: center;
}
#footer-one {
  color: #999FAA;
}
</style>

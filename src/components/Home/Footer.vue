<template>
  <div class="footer-container">
    <div class="footer-wrapper">
      <span id="footer-one">{{ nr }} results</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: ["collection", "nr"],
  created() {
    // console.log(this.artist);
  },
};
</script>

<style lang="scss" scoped>
.footer-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5vh;
  .footer-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    height: 100%;
    #footer-one {
      color: #999faa;
    }
  }
}
</style>
<template>
  <div id="footer-container">
    <div id="footer-wrapper">
      <span id="footer-one">#123 results</span>
      <span>show me more from {{artist}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: ["artist"]
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
#footer-one {
  color: #999FAA;
}
</style>

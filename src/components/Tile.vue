<template>
  <div id="tile-container">
    <img src="#" alt="#">
    <span id="title">title</span>
    <span id="sub-title">sub title</span>
  </div>
</template>

<script>
export default {
  name: "Tile"
};
</script>

<style>
#tile-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
img {
  width: 354px;
  height: 236px;
}
#title {
  width: 100%;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
}
#sub-title {
  width: 100%;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #999FAA;
}
</style>

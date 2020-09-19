<template>
  <div id="tile-container">
    <a v-bind:href="item.links.html" target="_blank">
      <img v-bind:src="item.urls.small" alt="#">
    </a>
    <span id="title">{{item.alt_description}}</span>
    <a v-bind:href="item.user.links.html" target="_blank" id="handle">
      <span id="sub-title">by: @{{item.user.name}} on Unsplash</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "Tile",
  props: ["item"],
  created() {
    // console.log(this.item);
  }
};
</script>

<style>
#tile-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  margin-right: 48px;
}
#handle {
  width: 100%;
}
img {
  width: 354px;
  height: 236px;
  object-fit: cover;
  border-radius: 12px;
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

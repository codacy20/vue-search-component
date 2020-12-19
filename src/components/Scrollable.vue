<template>
  <div id="scrollable-container">
    <div id="tile-wrapper">
      <Tile v-for="item in items" v-bind:key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
import Tile from "../components/Tile";

export default {
  name: "Scrollable",
  components: {
    Tile,
  },
  props: ["items"],
};
</script>

<style>
#scrollable-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
#tile-wrapper {
  overflow-x: scroll;
  overflow-y: hidden;
  height: 400px;
  display: flex;
  flex-direction: row;
  width: 95%;
}
</style>

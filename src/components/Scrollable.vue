<template>
  <div id="scrollable-container">
    <div id="wrapper">
      <Tile v-for="item in items" v-bind:key="item.id" :item="item"/>
    </div>
  </div>
</template>

<script>
import Tile from "../components/Tile";

export default {
  name: "Scrollable",
  components: {
    Tile
  },
  props: ["items"]
};
</script>

<style>
#scrollable-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
#wrapper {
  overflow-x: scroll;
  height: 400px;
  display: flex;
  flex-direction: row;
  width: 95%;
}

#wrapper::-webkit-scrollbar {
  width: 0px; /* For Chrome, Safari, and Opera */
}
</style>

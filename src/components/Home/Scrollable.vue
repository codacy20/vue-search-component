<template>
  <div class="scrollable-container">
    <div class="tile-wrapper">
      <Tile v-for="item in items" v-bind:key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
import Tile from "./Tile";

export default {
  name: "Scrollable",
  components: {
    Tile,
  },
  props: ["items"],
};
</script>

<style lang="scss" scoped>
.scrollable-container {
  display: flex;
  justify-content: center;
  align-items: center;
  .tile-wrapper {
    overflow-x: scroll;
    overflow-y: hidden;
    max-height: 25rem;
    display: flex;
    flex-direction: row;
    width: 95%;
    @media screen and (max-width: 600px) {
      flex-direction: column;
      overflow-x: hidden;
      overflow-y: scroll;
      max-height: none;
      height: 55vh;
    }
  }
}
</style>

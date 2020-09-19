<template>
  <div id="scrollable-container">
    <div id="wrapper">
      <Tile/>
      <Tile/>
      <Tile/>
    </div>
  </div>
</template>

<script>
import Tile from "../components/Tile";

export default {
  name: "Scrollable",
  components: {
    Tile
  }
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
  width: 90%;
}

#wrapper::-webkit-scrollbar {
  width: 0px; /* For Chrome, Safari, and Opera */
}
</style>

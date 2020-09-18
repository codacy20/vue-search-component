<template>
  <div id="searchbox-container">
    <div id="top">
      <input type="text" id="searchbox">
      <Dropdown/>
      <button id="btn">Search</button>
    </div>
    <div id="down">
      <Tags/>
      <Tags/>
      <Tags/>
    </div>
  </div>
</template>

<script>
import Dropdown from "../components/Dropdown";
import Tags from "../components/Tags";

export default {
  name: "Searchbox",
  components: {
    Dropdown,
    Tags
  }
};
</script>

<style>
#top {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
}

#down {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding-left: 20px;
}

#searchbox-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 174px;
}
#searchbox-container #searchbox {
  background: #F2F4F8;
  border-radius: 12px;
  border: 0;
  height: 74px;
  width: 642px;
  font-size: 20px;
  line-height: 26px;
  padding-left: 58px;
  box-sizing: border-box;
  font-weight: 500;
}
#btn {
  background: #000000;
  border-radius: 12px;
  color: white;
  height: 74px;
  width: 110px;
  border: 0;
  cursor: pointer;
}
</style>

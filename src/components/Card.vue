<template>
  <div id="card-container">
    <Searchbox/>
    <Dropdown/>
    <Scrollable/>
    <Footer/>
  </div>
</template>

<script>
import Footer from "../components/Footer";
import Scrollable from "../components/Scrollable";
import Searchbox from "../components/Searchbox";
import Dropdown from "../components/Dropdown";

export default {
  name: "Card",
  components: {
    Footer,
    Scrollable,
    Searchbox,
    Dropdown
  }
};
</script>

<style>
#card-container {
  width: 1136px;
  height: 656px;
  border-radius: 20px;
  background: white;
}
</style>

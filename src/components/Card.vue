<template>
  <div id="card-container">
    <Searchbox/>
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
}
</style>

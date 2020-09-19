<template>
  <div id="card-container">
    <Searchbox :title="collection.title" :tags="collection.tags"/>
    <Scrollable :items="items"/>
    <Footer :collection="collection" :nr="items.length"/>
  </div>
</template>

<script>
import Footer from "../components/Footer";
import Scrollable from "../components/Scrollable";
import Searchbox from "../components/Searchbox";
const k = "fb705fa89f360fd54d4d6cc5b2999599360ea9f6f08389c58f8462f58651af89";
const id = "8469893";
export default {
  name: "Card",
  components: {
    Footer,
    Scrollable,
    Searchbox
  },
  data() {
    return { items: [], collection: { name: "", url: "", title: "" } };
  },
  created() {
    fetch(`https://api.unsplash.com/collections/${id}/?client_id=${k}`)
      .then(response => response.json())
      .then(data => {
        this.$data.collection.name = `${data.user.first_name} ${
          data.user.last_name
        }`;
        this.$data.collection.url = data.links.html;
        this.$data.collection.title = data.title;
        this.$data.collection.tags = data.tags;
      });
    fetch(`https://api.unsplash.com/collections/${id}/photos/?client_id=${k}`)
      .then(response => response.json())
      .then(data => {
        this.$data.items = data;
      });
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

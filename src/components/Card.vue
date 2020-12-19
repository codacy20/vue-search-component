<template>
  <div id="card-container">
    <Searchbox
      :title="collection.title"
      :tags="collection.tags"
      :k="k"
      @sendMsg="childMsg"
    />
    <Scrollable :items="items" />
    <Footer :collection="collection" :nr="items.length" />
  </div>
</template>

<script>
import Footer from "../components/Footer";
import Scrollable from "../components/Scrollable";
import Searchbox from "../components/Searchbox";
export default {
  name: "Card",
  components: {
    Footer,
    Scrollable,
    Searchbox,
  },
  data() {
    const defaultID = "8469893";
    const k = process.env.VUE_APP_K;
    return {
      items: [],
      collection: { name: "", url: "", title: "" },
      k,
      defaultID,
    };
  },
  methods: {
    childMsg: function (data) {
      this.assignNewValue(data);
      this.searchAndPopulate(data.id);
    },
    assignNewValue: function (data) {
      this.$data.collection.name = `${data.user.first_name} ${data.user.last_name}`;
      this.$data.collection.url = data.links.html;
      this.$data.collection.title = data.title;
      this.$data.collection.tags = data.tags;
    },
    searchAndPopulate: function (id) {
      fetch(
        `https://api.unsplash.com/collections/${id}/photos/?client_id=${this.$data.k}`
      )
        .then((response) => response.json())
        .then((data) => {
          this.$data.items = data;
        });
    },
  },
  created() {
    fetch(
      `https://api.unsplash.com/collections/${this.$data.defaultID}/?client_id=${this.$data.k}`
    )
      .then((response) => response.json())
      .then((data) => {
        this.assignNewValue(data);
      });
    this.searchAndPopulate(this.$data.defaultID);
  },
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

<template>
  <div class="card-container">
    <Searchbox
      :title="title"
      :tags="tags"
      :k="k"
      @sendMsg="childMsg"
      @chooseTag="searchAndPopulate"
    />
    <Scrollable :items="items" />
    <Footer :nr="items.length" />
  </div>
</template>

<script>
import Footer from "./Footer";
import Scrollable from "./Scrollable";
import Searchbox from "./Searchbox";
export default {
  name: "HomeContext",
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
      tags: [
        { name: "Popular", url: "popular" },
        { name: "Top rated", url: "top_rated" },
        { name: "Now playing", url: "now_playing" },
        { name: "Upcoming", url: "upcoming" },
      ],
      title: "popular",
      k,
      defaultID,
    };
  },
  methods: {
    childMsg: function (data, title) {
      this.$data.items = data;
      this.assignNewValue(title);
      // this.searchAndPopulate();
    },
    assignNewValue: function (input) {
      this.$data.title = input.replace("_", " ");
    },
    searchAndPopulate: function (input) {
      fetch(
        `https://api.themoviedb.org/3/movie/${input}?api_key=${this.$data.k}&language=en-US&page=1`
      )
        .then((response) => response.json())
        .then((data) => {
          this.$data.items = data.results;
          this.assignNewValue(input);
        });
    },
  },
  created() {
    this.searchAndPopulate(this.$data.title);
  },
};
</script>

style <style lang="scss" scoped>
.card-container {
  width: 85vw;
  max-width: 55rem;
  height: 70vh;
  max-height: 39rem;
  border-radius: 20px;
  background: white;
}
</style>
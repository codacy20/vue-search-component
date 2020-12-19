<template>
  <div class="searchbox-container">
    <div class="searchbox-wrapper">
      <div id="top">
        <input
          type="text"
          id="searchbox"
          v-bind:placeholder="title"
          @input="search($event)"
        />
        <button id="btn">Search</button>
      </div>
      <div id="down">
        <span>Tags:</span>
        <Tags
          v-for="(tag, index) in tags"
          :key="index"
          :tag="tag"
          @chooseTag="searchAndPopulate"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Tags from "./Tags";

export default {
  name: "Searchbox",
  components: {
    Tags,
  },
  props: ["title", "tags", "k"],
  methods: {
    search: function (event) {
      if (event.target.value !== "" && event.target.value.length >= 3) {
        this.call(event.target.value);
        // this.trace(event.target.value);
      } else if (event.target.value === "") {
        this.call("War dogs");
      }
    },
    call(query) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${this.k}&language=en-US&query=${query}&page=1&include_adult=false`
      )
        .then((response) => response.json())
        .then((data) => {
          this.$emit("sendMsg", data.results, query);
        });
    },
    trace(query) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          createdAt: new Date(),
          phrase: query,
          ip: null,
        }),
      };
      fetch(
        "https://5f59f40eb121580016cadfef.mockapi.io/api/search",
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    },
    searchAndPopulate(input) {
      this.$emit("chooseTag", input);
    },
  },
};
</script>

<style lang="scss" scoped>
#top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

#down {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
}

.searchbox-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 20vh;
  max-height: 10rem;
  .searchbox-wrapper {
    width: 95%;
    #btn {
      background: #000000;
      border-radius: 12px;
      color: white;
      height: 7vh;
      max-height: 3.6rem;
      width: 18%;
      border: 0;
      cursor: pointer;
    }
    #searchbox {
      background: #f2f4f8;
      background-image: url('data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>');
      background-position-y: center;
      background-repeat: no-repeat;
      background-size: 35px;
      background-position-x: 15px;
      border-radius: 12px;
      border: 0;
      height: 7vh;
      max-height: 3.6rem;
      width: 80%;
      font-size: 20px;
      line-height: 26px;
      padding-left: 58px;
      box-sizing: border-box;
      font-weight: 500;
    }
  }
}
</style>

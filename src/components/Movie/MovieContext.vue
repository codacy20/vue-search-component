<template>
  <div class="card-container">
    <div class="exit" v-on:click="exit">
      <span class="material-icons"> clear </span>
    </div>
    <div class="image-container">
      <div
        class="image"
        v-if="poster"
        :style="{
          backgroundImage: `url('https://image.tmdb.org/t/p/w200${poster}')`,
        }"
      ></div>
      <img class="backdrop" :src="backdrop" alt="" />
    </div>
    <div class="content-container">
      <div class="content-inner-container">
        <span id="title">{{ title }}</span>
        <span v-if="tagline" id="sub-title">"{{ tagline }}"</span>
        <span>{{ overview }}</span>
        <span>Rating: {{ rating }}</span>
        <span v-if="budget">Budget: $ {{ budget }}</span>
        <span>Status: {{ status }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchMovie } from "../../utility/";

export default {
  name: "MovieContext",
  data() {
    return {
      title: "",
      tagline: "",
      rating: "",
      budget: "",
      overview: "",
      status: "",
      poster: "",
      backdrop: "",
    };
  },
  created() {
    fetchMovie(this.$route.params.id).then((data) => {
      this.$data.title = data.title;
      this.$data.tagline = data.tagline;
      this.$data.rating = data.vote_average;
      this.$data.budget = data.budget;
      this.$data.overview = data.overview;
      this.$data.status = data.status;
      this.$data.poster = data.poster_path;
      this.$data.backdrop =
        "https://image.tmdb.org/t/p/w500" + data.backdrop_path;
    });
  },
  methods: {
    exit() {
      this.$router.push(`/`);
    },
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
  display: flex;
  position: relative;
  .exit {
    height: 2rem;
    width: 2rem;
    position: absolute;
    right: 3rem;
    top: 2rem;
    background: #999faa;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border-radius: 15px;
  }
  @media screen and (max-width: 600px) {
    max-height: none;
    height: 95vh;
    width: 95vw;
    max-width: none;
    flex-direction: column;
    /* smartphones, iPhone, portrait 480x320 phones */
  }
  @media screen and (max-width: 380px) {
    max-height: none;
    height: 90vh;
    width: 95vw;
    max-width: none;
    /* smartphones, iPhone, portrait 480x320 phones */
  }

  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35%;
    @media screen and (max-width: 600px) {
      width: 100%;
    }
    .image {
      width: 13rem;
      max-width: 13rem;
      min-height: 18rem;
      object-fit: cover;
      border-radius: 12px;
      @media screen and (max-width: 600px) {
        display: none;
      }
    }
    .backdrop {
      display: none;
      @media screen and (max-width: 600px) {
        display: inline;
        width: 100%;
        border-top-right-radius: 15px;
        border-top-left-radius: 15px;
      }
    }
  }
  .content-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 65%;
    justify-content: center;
    padding: 3rem;
    @media screen and (max-width: 600px) {
      width: 100%;
      height: 100%;
    }
    .content-inner-container {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 75%;
      @media screen and (max-width: 600px) {
        height: 100%;
      }
      #title {
        font-size: 35px;
      }
      #sub-title {
        font-size: 16px;
        color: #999faa;
      }
    }
  }
}
</style>
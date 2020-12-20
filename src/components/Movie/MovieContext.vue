<template>
  <div class="card-container">
    <div class="image-container">
      <div
        class="image"
        v-if="poster"
        :style="{
          backgroundImage: `url('https://image.tmdb.org/t/p/w200${poster}')`,
        }"
      ></div>
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
    });
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
  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35%;
    .image {
      width: 13rem;
      max-width: 13rem;
      min-height: 18rem;
      object-fit: cover;
      border-radius: 12px;
    }
  }
  .content-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 65%;
    justify-content: center;
    padding: 3rem 3rem 3rem 0;
    .content-inner-container {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 75%;
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
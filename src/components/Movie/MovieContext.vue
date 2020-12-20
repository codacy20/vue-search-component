<template>
  <div class="card-container">
    <span>{{ $route.params.id }}</span>
    <div
      class="image"
      v-if="poster"
      :style="{
        backgroundImage: `url('https://image.tmdb.org/t/p/w200${poster}')`,
      }"
    ></div>
    <span>{{ title }}</span>
    <span>{{ tagline }}</span>
    <span>{{ rating }}</span>
    <span>{{ budget }}</span>
    <span>{{ overview }}</span>
    <span>{{ status }}</span>
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
  .image {
    width: 13rem;
    max-width: 13rem;
    min-height: 18rem;
    object-fit: cover;
    border-radius: 12px;
  }
}
</style>
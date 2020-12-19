<template>
  <div class="tile-container">
    <div
      class="image"
      v-if="item.poster_path"
      :style="{
        backgroundImage: `url('https://image.tmdb.org/t/p/w200${this.item.poster_path}')`,
      }"
    ></div>
    <div class="image" v-if="!item.poster_path">
      <img class="image" src="https://via.placeholder.com/200" alt="" />
    </div>
    <div class="desc">
      <span id="no-desc" v-if="!item.title"
        >sorry, didn't find a description for this photo</span
      >
      <span id="title" v-if="item.title">{{ item.title }}</span>
      <span id="sub-title">Release: {{ item.release_date }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tile",
  props: ["item"],
};
</script>

<style lang="scss" scoped>
.tile-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-right: 2rem;
  .image {
    width: 13rem;
    max-width: 13rem;
    min-height: 18rem;
    object-fit: cover;
    border-radius: 12px;
  }
  .desc {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 5rem;
    padding: 1.2rem 0;
    overflow: hidden;
    #title {
      width: 100%;
      font-weight: 500;
      font-size: 24px;
      line-height: 30px;
    }
    #sub-title {
      width: 100%;
      font-weight: normal;
      font-size: 16px;
      line-height: 20px;
      color: #999faa;
    }
    #no-desc {
      color: #999faa;
      width: 100%;
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
      height: 75px;
    }
  }
}
</style>

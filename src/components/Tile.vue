<template>
  <div id="tile-container">
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
    <span id="no-desc" v-if="!item.title"
      >sorry, didn't find a description for this photo</span
    >
    <span id="title" v-if="item.title">{{ item.title }}</span>
    <span id="sub-title">Release: {{ item.release_date }}</span>
  </div>
</template>

<script>
export default {
  name: "Tile",
  props: ["item"],
};
</script>

<style>
#tile-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  margin-right: 48px;
}
#handle {
  width: 100%;
}
.image {
  width: 200px;
  height: 236px;
  object-fit: cover;
  border-radius: 12px;
}
#title {
  width: 100%;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  height: 40px;
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
</style>

<template>
  <div id="tags-container" v-on:click="emitEvent">
    <span>{{ tag.name }}</span>
  </div>
</template>

<script>
export default {
  name: "Tags",
  props: ["tag"],
  methods: {
    emitEvent() {
      this.$emit("chooseTag", this.$props.tag.url);
    },
  },
};
</script>

<style>
#tags-container {
  padding: 0 10px;
  height: 32px;
  background: #ffffff;
  border: 2px solid #e8eaee;
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 10px;
}
.material-icons {
  cursor: pointer;
  height: 15px;
  font-size: 18px;
  margin-left: 5px;
}
</style>

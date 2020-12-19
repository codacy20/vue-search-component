<template>
  <div class="tags-container" v-on:click="emitEvent">
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

<style lang="scss" scoped>
.tags-container {
  padding: 0 0.75rem;
  height: 2rem;
  background: #ffffff;
  border: 2px solid #e8eaee;
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 1rem;
  cursor: pointer;
}
</style>>

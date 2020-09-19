<template>
  <div id="tags-container">
    <span>{{tag.title}}</span>
    <span class="material-icons">clear</span>
  </div>
</template>

<script>
export default {
  name: "Tags",
  props: ["tag"]
};
</script>

<style>
#tags-container {
  padding: 0 10px;
  height: 32px;
  background: #FFFFFF;
  border: 2px solid #E8EAEE;
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-right: 10px;
}
.material-icons {
  cursor: pointer;
  height: 15px;
  font-size: 18px;
  margin-left: 5px;
}
</style>

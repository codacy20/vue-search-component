<template>
  <div id="tags-container">
    <span>This is tag</span>
    <span class="material-icons">clear</span>
  </div>
</template>

<script>
export default {
  name: "Tags"
};
</script>

<style>
#tags-container {
  width: 109px;
  height: 32px;
  background: #FFFFFF;
  border: 2px solid #E8EAEE;
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
}
.material-icons {
  cursor: pointer;
  height: 20px;
}
</style>

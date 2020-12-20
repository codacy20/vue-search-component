<template>
  <div>
    <p>Page not found</p>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  props: ["msg"],
  components: {},
};
</script>
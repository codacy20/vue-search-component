<template>
  <div>
    <input
      type="text"
      class="dropdown-container"
      v-on:click="toggle"
      placeholder="Cat selected (nr)"
    >
    <div class="dropdown-temp-container" v-bind:class="{ active: isActive }">
      <ul>
        <li>
          <input type="checkbox" name id>
          <span>one</span>
        </li>
        <li>
          <input type="checkbox" name id>
          <span>two</span>
        </li>
        <li>
          <input type="checkbox" name id>
          <span>three</span>
        </li>
        <li>
          <input type="checkbox" name id>
          <span>four</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  methods: {
    toggle() {
      this.$data.isActive = !this.$data.isActive;
    }
  },
  data: function() {
    return {
      isActive: false
    };
  }
};
</script>

<style>
.dropdown-container {
  border: 2px solid #F2F4F8;
  box-sizing: border-box;
  border-radius: 12px;
  width: 304px;
  height: 74px;
  cursor: pointer;
  padding: 24px;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
}

.dropdown-temp-container {
  margin-top: 10px;
  background: white;
  display: none;
  position: absolute;
  height: 264px;
  width: 304px;
  border-radius: 12px;
  border: 2px solid #F2F4F8;
  box-sizing: border-box;
  overflow: scroll;
  -ms-overflow-style: none; /* For Internet Explorer and Edge */
}
.active {
  display: block;
}
.dropdown-temp-container::-webkit-scrollbar {
  width: 0px; /* For Chrome, Safari, and Opera */
}
ul {
  padding: 0;
  margin: 0;
}
ul li {
  box-sizing: border-box;
  font-weight: 500;
  font-size: 20px;
  border-bottom: 2px solid #F2F4F8;
  height: 74px;
  display: flex;
  align-items: center;
}

ul li:last-child {
  border: 0;
}

li input {
  background: #F2F4F8;
  border-radius: 4px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  border: 0;
  -webkit-appearance: none;
  margin-right: 16px;
  margin-left: 23px;
}
li input:checked {
  background-color: gray;
}
</style>

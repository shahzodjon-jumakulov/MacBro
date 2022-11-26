<template>
  <button :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ["mode"],
};
</script>

<style scoped>
button {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  width: calc(100% - 32px);
  margin: 20px 16px 0;
  padding: 8px 12px;
  border-radius: 6px;
  background: #2567c5;
  color: #ffffff;
  border: none;
  cursor: pointer;
  transition: all .4s;
}

button:hover {
    background-color: #0059b3;
}

button.flat {
  color: #2567c5;
  border: 1px solid #2567c5;
  background: transparent;
}
</style>
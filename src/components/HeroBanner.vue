<template>
  <div class="container">
    <div class="banner">
      <img :src="source" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["source"],
};
</script>

<style scoped>
.container {
    margin-top: 60px;
    max-width: 1200px;
}

img {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  -o-object-fit: cover;
  border-radius: 6px;
}

.banner {
    padding: 12px;
}
</style>
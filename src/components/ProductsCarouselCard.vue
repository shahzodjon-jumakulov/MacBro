<template>
  <div class="card">
    <div class="img-content">
      <img
        :src='source'
        alt="iPhone"
      />
    </div>
    <h3 class="card-title"> {{ title }} </h3>
    <p class="card-price"> {{ price }} so'm dan</p>
    <base-button>Xarid qilish</base-button>
  </div>
</template>

<script>
export default {
  props: [ 'source', 'title', 'price' ],
}
</script>

<style scoped>
.card {
  background-color: #ffffff;
  width: 277px;
  text-align: center;
  text-decoration: none;
  border-radius: 8px;
  padding: 38px 0;
  margin: 0 16px;
  cursor: pointer;
}

.card:hover .card-title {
  color: #06c;
}

.img-content {
  height: 200px;
  margin-bottom: 26px;
  display: flex;
  justify-content: center;
}

.img-content:hover img {
  transform: scale(1.05) !important;
}

.img-content img {
  transition: all 0.4s ease;
  object-fit: contain;
  padding: 20px;
  max-width: 100%;
  max-height: 100%;
}

h3 {
  font-size: 17px;
  font-weight: 500;
  line-height: 25px;
  color: #1d1d1d;
  transition: all 0.4s ease;
}

p {
  display: block;
  margin-top: 8px;
  font-size: 17px;
  line-height: 26px;
  color: #333;
}
</style>
<template>
  <div class="container">
    <h2><slot></slot></h2>
    <div class="products">
      <div class="product-item" v-for="product in section" :key="product.key">
        <div class="product-item-block">
          <a href="#" class="item-wrapper">
            <h3>{{ product.name }}</h3>
            <div class="img-wrapper">
              <img :src="product.src" alt="" />
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["section"],
};
</script>

<style scoped>
.container {
  margin: 50px auto 20px;
  text-align: center;
  max-width: 1200px;
}

h2 {
  font-size: 48px;
  font-weight: 600;
  line-height: 52px;
}

.products {
  margin: 30px 0;
  display: flex;
  flex-wrap: wrap;
}

.products > .product-item {
  padding: 12px;
}

.product-item {
  flex-grow: 0;
  max-width: 23%;
  flex-basis: 23%;
}

.product-item-block {
  border-radius: 18px;
  box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;
  background-color: #fff;
}

.item-wrapper {
  padding: 30px 20px;
  color: #1d1d1d;
  display: block;
  text-decoration: none;
}

.item-wrapper:hover h3 {
  color: #06c;
}

h3 {
  font-size: 19px;
  font-weight: 600;
  line-height: 23px;
}

.img-wrapper {
  padding-top: 28px;
  width: 100%;
  height: 155px;
}

img {
  max-width: 85%;
  max-height: 89%;
  display: block;
  margin: 0 auto;
}
</style>
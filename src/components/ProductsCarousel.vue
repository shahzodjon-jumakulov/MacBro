<template>
  <div class="container">
    <h2>Yangi mahsulotlar</h2>
    <div class="carousel-cards">
      <div class="cards-container">
        <carousel
          :itemsToShow="4"
          :itemsToScroll="4"
          :wrapAround="true"
          :transition="500"
          :modelValue="2"
          class="products"
        >
          <slide v-for="card in cards" :key="card.key">
            <products-carousel-card
              :source="card.src"
              :title="card.title"
              :price="card.price"
            ></products-carousel-card>
          </slide>
          <template #addons>
            <Navigation />
            <Pagination />
          </template>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import ProductsCarouselCard from "./ProductsCarouselCard.vue";

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    ProductsCarouselCard,
  },
  data() {
    return {
      cards: [
        {
          src: "https://cdn.macbro.uz/macbro/d35cfadb-2308-42fe-b7f5-da7dd24a4b74",
          title: "iPhone 14 Pro Max",
          price: "16 530 000",
        },
        {
          src: "https://cdn.macbro.uz/macbro/d903f0a3-24db-4c1f-88ee-2f13edd90847",
          title: "iPhone 14 Pro",
          price: "14 478 000",
        },
        {
          src: "https://cdn.macbro.uz/macbro/c6e88cf5-bc5c-4817-8dc9-120abc2fc5f9",
          title: "iPhone 14 Plus",
          price: "11 628 000",
        },
        {
          src: "https://cdn.macbro.uz/macbro/3b4895b2-905a-4fce-9930-d2e4831b892c",
          title: "iPhone 14",
          price: "11 172 000",
        },
        {
          src: "https://cdn.macbro.uz/macbro/5343005b-7a78-4363-9a41-ce4aaf0598b0",
          title: "Apple Watch Ultra",
          price: "10 602 000",
        },
        {
          src: "https://cdn.macbro.uz/macbro/7e69eb46-2ae1-46f1-9019-295a63788cd7",
          title: "Apple Watch Series 8",
          price: "5 586 000",
        },
        {
          src: "https://cdn.macbro.uz/macbro/b9dfcf31-17b9-4314-aeac-66a76347e54c",
          title: "Apple Watch SE 2 (2022)",
          price: "4 104 000",
        },
        {
          src: "https://cdn.macbro.uz/macbro/b9abc5d9-da69-4251-8a80-e614021ee3f6",
          title: "AirPods Pro 2",
          price: "3 078 000",
        },
        {
          src: "https://cdn.macbro.uz/macbro/ce231311-da7e-4a52-aed2-dece7ccc3b8f",
          title: "iPad Pro 12.9-inch (M2/2022)",
          price: "17 100 000",
        },
        {
          src: "https://cdn.macbro.uz/macbro/6bf254ee-726e-4867-a6fa-c0a90e708138",
          title: "iPad Pro 11-inch (M2/2022)",
          price: "12 540 000",
        },
        {
          src: "https://cdn.macbro.uz/macbro/4359d5d3-fefc-4f7f-a608-49f5920ae02b",
          title: "iPad (10th Gen 2022)",
          price: "8 892 000",
        },
        // {
        //   src: "https://cdn.macbro.uz/macbro/7e69eb46-2ae1-46f1-9019-295a63788cd7",
        // },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  margin-bottom: 50px;
}

.carousel-cards {
  margin: 30px auto;
  max-width: 1200px;
}

.cards-container {
  padding: 0 32px;
}

h2 {
  text-align: center;
  font-size: 48px;
  font-family: "San-Francisco", sans-serif;
  font-weight: 600;
  line-height: 52px;
}
</style>

<style>
.carousel.products .carousel__pagination-button:after {
  background-color: #000;
}

.carousel.products .carousel__slide {
  transform: translateX(142px);
}

/* pagination */

.carousel.products .carousel__pagination-button {
  opacity: 0.25;
  transition: none;
  padding: 5px;
}

.carousel.products .carousel__pagination-button--active {
  opacity: 0.75;
}

.carousel.products .carousel__pagination-button--active:hover {
  opacity: 0.75 !important;
}

.carousel.products .carousel__pagination-button:hover {
  opacity: 1;
}

.carousel.products .carousel__pagination-button::after {
  background-color: #000000;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.carousel.products .carousel__pagination {
  margin-top: 30px;
}

.carousel.products .carousel__prev svg,
.carousel.products .carousel__next svg {
  display: none;
}

.carousel.products .carousel__prev {
  background: url("../assets/card-prev.svg") no-repeat center;
  background-color: #ececec;
  border-radius: 50%;
  display: block;
  width: 48px;
  height: 48px;
  margin-left: -40px;
  margin-top: -30px;
}

.carousel.products .carousel__prev:hover {
  background: url("../assets/card-prev-hovered.svg") no-repeat center;
  background-color: #ececec;
  border-radius: 50%;
  display: block;
  width: 48px;
  height: 48px;
}

.carousel.products .carousel__next {
  background: url("../assets/card-next.svg") no-repeat center #ececec;
  background-color: #ececec;
  border-radius: 50%;
  display: block;
  width: 48px;
  height: 48px;
  margin-right: -40px;
  margin-top: -30px;
}

.carousel.products .carousel__next:hover {
  background: url("../assets/card-next-hovered.svg") no-repeat center #ececec;
  background-color: #ececec;
  border-radius: 50%;
  display: block;
  width: 48px;
  height: 48px;
}
</style>
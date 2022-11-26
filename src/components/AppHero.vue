<template>
  <div class="hero-wrapper">
    <div class="container">
      <Carousel class="slider-inner" :wrapAround="true" :transition="600">
        <Slide v-for="slide in slides" :key="slide.key" class="slider-item">
          <div class="slider-item-container">
            <div class="slider-wrapper">
              <p class="hero-new">Yangi</p>
              <h2 class="hero-title">{{ slide.title }}</h2>
              <p class="hero-desc">{{ slide.desc }}</p>
              <router-link to="" class="hero-link">Sotib olish</router-link>
            </div>
            <div class="hero-background">
              <video autoplay loop playsinline muted>
                <source :src="slide.src" type="video/mp4" />
                <source :src="slide.src" type="video/webm" />
              </video>
            </div>
          </div>
        </Slide>
        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      slides: [
        {
          title: "Apple Watch Ultra",
          desc: "Eng takomillashtirilgan Apple Watch.",
          src: "https://cdn.macbro.uz/macbro/5ab93411-fa15-4363-bfc2-7a1a292d3e6e",
        },
        {
          title: "iPhone 14 and iPhone 14 Plus",
          desc: "",
          src: "https://cdn.macbro.uz/macbro/c9baf95c-dfa0-42fc-aaf8-3ab1090ba371",
        },
        {
          title: "iPhone 14 Pro",
          desc: "Chegaralarni kengaytirib.",
          src: "https://cdn.macbro.uz/macbro/bee39e41-3e48-43ae-a16a-f3a4ed4f61ed",
        },
        {
          title: "AirPods Pro 2",
          desc: "",
          src: "https://cdn.macbro.uz/macbro/e2fcb36a-d08c-4331-a812-bfe3fc23af22",
        },
        {
          title: "Apple Watch Series 8",
          desc: "Zamondan oldinlang.",
          src: "https://cdn.macbro.uz/macbro/ac4ef6b5-3e52-471b-ac2f-bfa267d85e01",
        },
        {
          title: "MacBook Pro 16-inch",
          desc: "Tarixdagi eng kuchli MacBook Pro.",
          src: "https://cdn.macbro.uz/macbro/efdd5298-f8ab-4df9-b6b8-335062db1c97",
        },
        {
          title: "iMac 24",
          desc: "Oziga hos dizayn - sizga mos keladigan ideal.",
          src: "https://cdn.macbro.uz/macbro/e219b7fe-e6c3-482e-a904-49fc615e4cbc",
        },
        {
          title: "MacBook Air 13 M2",
          desc: "Yangilangan Air.",
          src: "https://cdn.macbro.uz/macbro/bf46383f-af99-48e4-b9b4-699761faf67c",
        },
      ],
    };
  },
};
</script>

<style scoped>
.hero-wrapper {
  height: calc(100vh - 74px);
  width: 100%;
  background-color: #000;
  color: white;
  margin-bottom: 50px;
  max-height: 2048px;
  min-height: 500px;
  overflow: hidden;
  position: relative;
}

.container {
  height: 100%;
  position: relative;
  max-width: 100%;
  z-index: 0;
}

/* slider-inner */
.slider-inner {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.slider-item-container {
  margin: 0 auto;
  max-width: 1000px;
}

.slider-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  margin-left: -30px;
  margin-top: 15px;
}

.hero-new {
  display: block;
  margin-bottom: 5px;
  color: #f56300;
  font-size: 21px;
  line-height: 25px;
  font-weight: 700;
  max-width: 400px;
}

.hero-title {
  font-size: 56px;
  font-weight: 700;
  line-height: 60px;
  max-width: 400px;
  margin: 0 0 6px;
  text-align: left;
  color: #f5f5f7;
}

.hero-desc {
  line-height: 25px;
  max-width: 400px;
  text-align: left;
  font-weight: 700;
  font-size: 24px;
  margin: 1rem 0;
  color: #f5f5f7;
}

.hero-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  padding: 0 16px;
  text-align: center;
  font-size: 17px;
  max-height: 32px;
  min-width: 80px;
  min-height: 32px;
  border-radius: 22px;
  color: #fff;
  flex-grow: 1;
  flex-basis: 1;
  background-color: #0071e3;
  text-decoration: none;
}

.hero-background {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.hero-background video {
  width: 100%;
  height: 100%;
}

.slider-item-container {
  min-height: 200px;
  width: 100%;
  color: #ffffff;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  align-items: center;
}
</style>



<style>
.carousel.slider-inner .carousel__viewport,
.carousel.slider-inner .carousel__track {
  height: 100%;
}

.carousel.slider-inner .carousel__track {
  transition-timing-function: ease-in-out !important;
}

.carousel.slider-inner .carousel__pagination-button {
  opacity: 0.5;
  transition: opacity 0.6s ease;
  padding: 0;
  margin: 0 3px;
}

.carousel.slider-inner .carousel__pagination-button:hover {
  background-color: transparent;
}

.carousel.slider-inner .carousel__pagination-button:hover::after {
  background-color: #ffffff;
}

.carousel.slider-inner .carousel__pagination-button--active {
  opacity: 0.99;
}

.carousel.slider-inner .carousel__pagination-button::after {
  background-color: #ffffff;
  width: 30px;
  height: 5.5px;
  border-radius: 3px;
}

.carousel.slider-inner .carousel__pagination {
  margin-top: -31px;
  z-index: 99;
}

.carousel.slider-inner .carousel__prev svg,
.carousel.slider-inner .carousel__next svg {
  display: none;
}

.carousel.slider-inner .carousel__next,
.carousel.slider-inner .carousel__prev {
  height: 100%;
  margin: 0 7%;
  opacity: 0.5;
  transition: opacity 0.15s ease;
}

.carousel.slider-inner .carousel__prev {
  background: url("../assets/slide-prev.svg") no-repeat center;
}

.carousel.slider-inner .carousel__next {
  background: url("../assets/slide-next.svg") no-repeat center;
}

.carousel.slider-inner .carousel__next:hover,
.carousel.slider-inner .carousel__prev:hover {
  opacity: 1;
}
</style>
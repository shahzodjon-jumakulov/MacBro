<template>
  <div class="hero-wrapper">
    <div class="container">
      <div class="slider">
        <ul class="slider-indicator">
          <li
            v-for="indicator in slides"
            :key="indicator.key"
            class="slider-indicator-item"
            :class="indicator.main ? 'active' : null"
          ></li>
        </ul>
        <div class="slider-inner">
          <div
            v-for="slide in slides"
            :key="slide.key"
            class="slider-item"
            :class="slide.main ? 'active' : null"
          >
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
          </div>
        </div>
        <div class="slider-prev">
          <div class="slider-prev-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
              width="20"
              height="20"
              viewBox="0 0 8 8"
            >
              <path d="M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z" />
            </svg>
          </div>
        </div>
        <div class="slider-next">
          <div class="slider-next-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
              width="20"
              height="20"
              viewBox="0 0 8 8"
            >
              <path d="M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: 0,
      slides: [
        {
          title: "Apple Watch Ultra",
          desc: "Eng takomillashtirilgan Apple Watch.",
          src: "https://cdn.macbro.uz/macbro/5ab93411-fa15-4363-bfc2-7a1a292d3e6e",
          main: true,
        },
        {
          title: "iPhone 14 and iPhone 14 Plus",
          desc: "",
          src: "https://cdn.macbro.uz/macbro/c9baf95c-dfa0-42fc-aaf8-3ab1090ba371",
          main: false,
        },
      ],
    };
  },
  methods: {

  },
};
</script>

<style scoped>
.hero-wrapper {
  height: calc(100vh - 74px);
  width: 100%;
  background-color: #000;
  color: white;
  margin-bottom: 20px;
  max-height: 2048px;
  min-height: 500px;
  overflow: hidden;
  position: relative;
}

.container,
.slider {
  height: 100%;
  position: relative;
  max-width: 100%;
  z-index: 0;
}

/* slider-indicator */
.slider-indicator {
  list-style: none;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin-bottom: 1rem;
  z-index: 15;
}

.slider-indicator-item {
  width: 30px;
  height: 3px;
  margin: 0 3px;
  cursor: pointer;
  box-sizing: content-box;
  flex: 0 1 auto;
  text-indent: -999px;
  background-clip: padding-box;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  opacity: 0.5;
  transition: opacity 0.6s ease;
  position: relative;
}

.slider-indicator-item::after {
  position: absolute;
  content: "";
  height: 6px;
  width: 100%;
  top: 0;
  left: 0;
  background-color: #fff;
  border-radius: 3px;
}

.slider-indicator-item.active {
  opacity: 1;
}

/* slider-inner */
.slider-inner {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.slider-item {
  position: relative;
  float: left;
  width: 100%;
  height: 100%;
  display: none;
  transition: transform 0.6s ease-in-out;
}

.slider-item.active {
  display: block;
  transform: 0;
}

.slider-item > div {
  height: 100%;
  padding: 0 100px;
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
}

.hero-desc {
  font-size: 17px;
  line-height: 25px;
  max-width: 400px;
  text-align: left;
  font-weight: 700;
  font-size: 18pt;
  margin: 1rem 0;
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

/* slider-prev and slider-next */
.slider-prev,
.slider-next {
  position: absolute;
  top: 0;
  bottom: 0;
  align-items: center;
  display: flex;
  justify-content: center;
  width: 15%;
  padding: 0;
  text-align: center;
  border: 0;
  opacity: 0.5;
  transition: opacity 0.15s ease;
  cursor: pointer;
}

.slider-prev:hover,
.slider-next:hover {
  opacity: 1;
}

.slider-prev {
  left: 0;
}

.slider-next {
  right: 0;
}
</style>


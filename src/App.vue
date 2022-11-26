<template>
  <app-header></app-header>
  <router-view></router-view>
  <app-footer></app-footer>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style>
@font-face {
  font-family: "San-Francisco";
  src: url('./fonts/SFUIDisplay-Semibold.woff') format("woff");
  font-weight: 600;
}

@font-face {
  font-family: "San-Francisco";
  src: url('./fonts/SFUIDisplay-Medium.woff') format("woff");
  font-weight: 500;
}

@font-face {
  font-family: "San-Francisco";
  src: url('./fonts/SFUIDisplay-Regular.woff') format("woff");
  font-weight: 400;
}


*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  font-family: "San-Francisco", sans-serif;
}

body {
  background-color: #f5f5f7;
  color: rgba(0, 0, 0, 0.87);
}

.container {
  max-width: 1280px;
  margin: 0 auto;
}
</style>
<template>
  <main role="main" id="app">
    <Ribbon v-bind="ribbonOptions"></Ribbon>

    <Intro/>

    <TextA/>

    <Gallery
      :count="3"
      :hue_range="[200, 250]" :lightness_range="[60, 80]"
      metric="Manhattan"
    />

    <TextB/>

    <Gallery
      :count="3"
      :hue_range="[100, 150]" :lightness_range="[60, 80]"
      metric="Euclidean"
    />

    <TextC/>

    <Gallery
      :count="3"
      :hue_range="[0, 359]" :lightness_range="[60, 80]"
      metric="Minkovski"
    />

    <Play/>

  </main>
</template>

<script>
import Intro from './components/Intro.vue'
import Gallery from './components/Gallery.vue'
import TextA from './components/TextA.vue'
import TextB from './components/TextB.vue'
import TextC from './components/TextC.vue'
import Play from './components/Play.vue'

export default {
  name: 'app',
  components: { Intro, Gallery, TextA, TextB, TextC, Play },
  data() {
    return {
      ribbonOptions: {
        text: 'Fork me on GitHub',
        linkUrl: 'https://github.com/6r1d/pattern-placeholder',
        fixed: false
      }
    }
  }
}
</script>

<style lang="scss">
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
@import '../node_modules/highlight.js/styles/default.css';


.bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

@media (min-width: 768px) {
    .bd-placeholder-img-lg {
        font-size: 3.5rem;
    }
}

.code-bg {
  background-color: rgb(240, 240, 240);
}
</style>

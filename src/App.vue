<template>
  <main role="main" id="app">
    <Intro/>
    <Gallery :count="10"/>
  </main>
</template>

<script>
import Intro from './components/Intro.vue'
import Gallery from './components/Gallery.vue'

export default {
  name: 'app',
  components: { Intro, Gallery }
}
</script>

<style lang="scss">
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

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
</style>

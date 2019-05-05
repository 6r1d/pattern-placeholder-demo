<template>
  <main role="main" id="app">
    <Intro/>

    <div class="bg-light">
        <div class="container">
          <div class="row">
              <p>
                This page provides a demo for my VUE
                <a href="https://www.npmjs.com/package/vue-pattern-placeholder">vue-pattern-paceholder</a>
                component.
              </p>
              <p>It makes a pattern from little cells and you can configure color range and cell geometry.</p>
              <p>For now, there are three pattern types to use:</p>
          </div>
          <div class="row py-1">
              <ul>
                <li><code>Manhattan</code> - straight and 45° cell edges</li>
                <li><code>Euclidean</code> - free degree cell edges</li>
                <li><code>Minkovski</code> - rounded cell edges</li>
              </ul>
          </div>
          <div class="row py-1">
            <p>
              The pattern itself is called Voronoi diagram and to know more,
              I recommend you to look at <a href="https://upload.wikimedia.org/wikipedia/commons/d/d9/Voronoi_growth_euclidean.gif">this animation</a> and read <a href="https://en.wikipedia.org/wiki/Voronoi_diagram">Wikipedia article</a>
              about it.
            </p>
          </div>
          <div class="row py-1">
            <p>
              Let's start! For now, I'm setting cell geometry using a <code>metric</code> option.
              I selected <code>Manhattan</code> metric and set a blue color range.
            </p>
          </div>
        </div>
    </div>

    <Gallery
      :count="8"
      :hue_range="[200, 250]" :lightness_range="[60, 80]"
    />
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

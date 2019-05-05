<template>
  <div class="bg-light">
      <div class="container">
        <div class="row">
            <p>
              This page provides a demo for my VUE
              <a href="https://www.npmjs.com/package/vue-pattern-placeholder">vue-pattern-paceholder</a>
              component.
            </p>
        </div>
        <div class="row">
          <p>It makes a pattern from little cells and you can configure color range and cell geometry.</p>
        </div>
        <div class="row">
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
        <div class="row code-bg py-1">
          <highlight-code lang="vue">{{code_a}}</highlight-code>
        </div>
        <div class="row py-1"><br/></div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'TextA',
  data: () => {
    return {
      code_a: `
      <patternPlaceholder
        :width="200" :height="200" input="ABC"
        :hue_range="[200, 250]" :lightness_range="[60, 80]"
      />`
    }
  }
}
</script>

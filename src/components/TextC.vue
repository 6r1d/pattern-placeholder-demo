<template>
  <div class="bg-light">
      <div class="container">
        <div class="row py-1">
          <p>
            How about more colors? Let's try Minkovski metric, too.
          </p>
        </div>
        <div class="row code-bg py-1">
          <highlight-code lang="vue">{{code}}</highlight-code>
        </div>
        <div class="row py-1"><br/></div>
      </div>
  </div>
</template>

<script>
import patternPlaceholder from 'vue-pattern-placeholder'

export default {
  name: 'TextA',
  components: {patternPlaceholder},
  data: () => {
    return {
      code: `
      <patternPlaceholder
        :width="200" :height="200" input="ABC"
        :hue_range="[0, 359]" :lightness_range="[60, 80]"
        metric="Minkovski"
      />`
    }
  }
}
</script>

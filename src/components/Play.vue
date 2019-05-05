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
  name: 'Play',
  components: {patternPlaceholder},
  data: () => {
    return {
    }
  },
  computed: {
    code: () => {
      return ``
    }
  }
}
</script>

<template>
  <div class="bg-light">
      <div class="container">
        <div class="row py-1">
          <p>
            Now, why don't we try some other metrics?
            I'll change the color range a bit, too.
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
export default {
  name: 'TextB',
  data: () => {
    return {
      code: `
      <patternPlaceholder
        :width="200" :height="200" input="ABC"
        :hue_range="[100, 150]" :lightness_range="[60, 80]"
        metric="Euclidean"
      />`
    }
  }
}
</script>

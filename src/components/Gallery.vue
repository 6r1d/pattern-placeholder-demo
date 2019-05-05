<template>
  <div class="album py-5 bg-light">
      <div class="container">
        <div class="row">
          <div class="col-md-3" v-for="color in count" v-bind:color="color">
            <div class="card mb-3 justify-content-center align-items-center">
              <patternPlaceholder
                class="ph"
                :width="200" :height="200" :input="`${color}`"
                :hue_range="[200, 250]"
                :lightness_range="[60, 80]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import patternPlaceholder from 'vue-pattern-placeholder'

export default {
  name: 'Gallery',
  components: {
      patternPlaceholder
  },
  props: {
    count: Number
  }
}
</script>

<style lang="scss" scoped>
.ph {
  max-width: 200px;
  max-height: 200px;
  margin: 2em 0;
}
</style>

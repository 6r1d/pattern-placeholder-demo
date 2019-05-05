<template>
  <div class="bg-light py-1 bg-light">
      <div class="container">
        <div class="row py-1">
          <p>It's your turn now.</p>
        </div>

        <div class="row code-bg py-1">
          <highlight-code lang="vue">{{code}}</highlight-code>
        </div>

        <div class="row py-1"></div>

        <div class="row py-1 align-middle text-center justify-content-center">
          <patternPlaceholder
            class="ph"
            :width="200" :height="200" input="test"
            :hue_range="hue_range"
            :lightness_range="lightness_range"
            :metric="metric"
          />
        </div>

        <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-6 align-middle text-center justify-content-center">
            <br/>
            <span>Metric:&nbsp;</span>
            <select v-model="metric">
              <option v-for="aMetric in metrics" v-bind:key="aMetric">{{aMetric}}</option>
            </select>
            <br/><br/>
            <span>Hue (start and end):</span><br/><br/>
            <Slider v-model="scol_min" @input="slider_a_update" style="display: inline-block;" />
            <br/><br/>
            <Slider v-model="scol_max" @input="slider_b_update" style="display: inline-block;" />
            <br/><br/>
            <span>Lightness range:</span>
            <br/>
            <input v-model.number="min_lightness" type="number" />
            <input v-model.number="max_lightness" type="number" />
            <br/>
          </div>
          <div class="col-md-3"></div>
        </div>
      </div>
    </div>
</template>

<script>
import { Slider } from 'vue-color'
import patternPlaceholder from 'vue-pattern-placeholder'

export default {
  name: 'Play',
  components: {Slider, patternPlaceholder},
  methods: {
    slider_a_update(event) {
      this.min_hue = Math.floor(event.hsv.h)
    },
    slider_b_update(event) {
      this.max_hue = Math.floor(event.hsv.h)
    }
  },
  data: () => {
    return {
      scol_min: {h: 150, s: 0.66, v: 0.30},
      scol_max: {h: 150, s: 0.66, v: 0.30},
      min_hue: 0,
      max_hue: 0,
      min_lightness: 60,
      max_lightness: 80,
      metric: 'Euclidean',
      metrics: ['Euclidean', 'Manhattan', 'Minkovski']
    }
  },
  computed: {
    hue_range: function() {
      return [this.min_hue, this.max_hue]
    },
    lightness_range: function() {
      return [this.min_lightness, this.max_lightness]
    },
    code: function() {
      return `
      <patternPlaceholder
        :width="200" :height="200" input="ABC"
        :hue_range="[${this.min_hue}, ${this.max_hue}]"
        :lightness_range="[${this.min_lightness}, ${this.max_lightness}]"
        metric="${this.metric}"
      />
      `
    }
  }
}
</script>

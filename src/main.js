import Vue from 'vue'
import 'bootstrap'
import VueHighlightJS from 'vue-highlight.js';
// Highlight.js languages (Only required languages)
import css from 'highlight.js/lib/languages/css';
import javascript from 'highlight.js/lib/languages/javascript';
import vue from 'vue-highlight.js/lib/languages/vue';
import ForkeMeOnGithub from 'fork-me-on-github-vue';
import App from './App.vue'

Vue.use(ForkeMeOnGithub)
Vue.use(VueHighlightJS, {
	languages: {
		css,
		javascript,
		vue
	}
});

Vue.config.productionTip = false

Vue.use(VueHighlightJS)

new Vue({
  render: h => h(App),
}).$mount('#app')

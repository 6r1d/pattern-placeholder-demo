<template>
<section class="jumbotron text-center">
  <div class="container hc">
    <h1 class="jumbotron-heading">Vue pattern placeholder</h1>
    <p class="lead">If you need a beautiful placeholder for your Vue project, you're in the right place!</p>
    <p>
      <a href="#play" class="btn btn-primary my-2">Play!</a>
    </p>
  </div>
</section>
</template>

<script>
export default {
  name: 'Intro',
}
</script>

<style lang="scss" scoped>
.jumbotron {
  background-image: url("../assets/bg.png");
  background-size: cover;
  background-repeat: no-repeat;
}

.hc > h1 {
  color: #fff;
}

.hc > p {
  color: #ddd;
  font-weight: 700;
  font-family: sans-serif;
}
</style>

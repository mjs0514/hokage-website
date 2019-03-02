<template>
  <div class="movies">
    <h1>호카케 리스트</h1>
    <div v-for="movie in movies" class="movie">
      <img v-bind:src="movie.image" class="guide-image img-fluid img-thumbnail">
      <div>
        <strong>{{movie.name}}</strong>        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    this.$http.get('/service/movies')
    .then((response) => {
      this.movies = response.data
    })
  },
  data () {
    return {
      movies: []
    }
  }
}
</script>

<style>
.guide-image {width:150px; height:150px;}
</style>

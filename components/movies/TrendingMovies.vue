<template>
  <div class="movies">
    <div class="movies__container">
      <h1>Popular</h1>

      <div ref="movies" class="movies__list">
        <div v-for="(movie, index) in movies" :key="index" class="movies__img">
          <img :src="IMG_PATH + movie.poster_path" :alt="movie.poster_path" />
        </div>
      </div>

      <i class="fas fa-chevron-right fa-6x" @click="scrollLeft()"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      IMG_PATH: 'https://image.tmdb.org/t/p/w500',
      movies: [],
    }
  },
  mounted() {
    this.fetchPopularMovies()
    this.fetchGenres()
  },
  methods: {
    async fetchPopularMovies() {
      const ip = await this.$axios.$get(
        'https://api.themoviedb.org/3/movie/popular?api_key=70baec9352c4f3421225b720de201f38&page=1'
      )
      const movies = ip.results

      movies.forEach((movie) => {
        this.movies.push(movie)
      })
    },
    async fetchGenres() {
      const ip = await this.$axios.$get(
        'https://api.themoviedb.org/3/genre/movie/list?api_key=70baec9352c4f3421225b720de201f38&page=1'
      )
      const genres = ip.genres
      console.log(genres)
    },
  },
}
</script>

<style></style>

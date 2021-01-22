<template>
  <div class="movies">
    <div class="movies__container">
      <h1>Popular Movies</h1>

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
      API_URL:
        'https://api.themoviedb.org/3/movie/popular?api_key=70baec9352c4f3421225b720de201f38&page=1',
      IMG_PATH: 'https://image.tmdb.org/t/p/w500',
      movies: [],
    }
  },
  mounted() {
    this.fetchPopularMovies()
  },
  methods: {
    async fetchPopularMovies() {
      const ip = await this.$axios.$get(this.API_URL)
      const movies = ip.results

      movies.forEach((movie) => {
        this.movies.push(movie)
      })
    },
    scrollLeft() {
      this.$refs.movies.scrollLeft += 30
      this.$refs.movies.scrollLeft = this.$refs.movies.scrollLeft + 100

      console.log(this.$refs.movies.scrollLeft)
    },
  },
}
</script>

<style></style>

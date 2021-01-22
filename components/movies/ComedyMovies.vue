<template>
  <div class="movies">
    <div class="movies__container">
      <h1>Comedy</h1>

      <div class="movies__list">
        <div v-for="(movie, index) in movies" :key="index" class="movies__img">
          <img :src="IMG_PATH + movie.poster_path" :alt="movie.poster_path" />
        </div>
      </div>

      <i class="fas fa-chevron-right fa-6x"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      API_URL:
        'https://api.themoviedb.org/3/movie/popular?api_key=70baec9352c4f3421225b720de201f38',
      IMG_PATH: 'https://image.tmdb.org/t/p/w500',

      movies: [],
      comedyId: 35,
    }
  },
  mounted() {
    this.fetchComedyMovies(1)
    this.fetchComedyMovies(2)
    this.fetchComedyMovies(3)
    this.fetchComedyMovies(4)
    this.fetchComedyMovies(5)
  },
  methods: {
    async fetchComedyMovies(page) {
      const ip = await this.$axios.$get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=70baec9352c4f3421225b720de201f38&&page=${page}`
      )
      const movies = ip.results
      movies.forEach((movie) => {
        movie.genre_ids.forEach((id) => {
          if (id === this.comedyId) {
            this.movies.push(movie)
          }
        })
      })
    },
  },
}
</script>

<style></style>

<template>
  <div class="movies">
    <div class="movies__container">
      <h1>Action</h1>

      <div class="movies__list">
        <nuxt-link
          v-for="(movie, index) in movies"
          :key="index"
          tag="div"
          :to="'/movie/' + movie.id"
          class="movies__img"
        >
          <img :src="IMG_PATH + movie.poster_path" :alt="movie.poster_path" />
        </nuxt-link>
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
      actionId: 28,
    }
  },
  mounted() {
    this.fetchActionMovies(1)
    this.fetchActionMovies(2)
    this.fetchActionMovies(3)
    this.fetchActionMovies(4)
    this.fetchActionMovies(5)
  },
  methods: {
    async fetchActionMovies(page) {
      const ip = await this.$axios.$get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=70baec9352c4f3421225b720de201f38&&page=${page}`
      )
      const movies = ip.results
      movies.forEach((movie) => {
        movie.genre_ids.forEach((id) => {
          if (id === this.actionId) {
            this.movies.push(movie)
          }
        })
      })
    },
  },
}
</script>

<style></style>

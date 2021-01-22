<template>
  <div class="movies">
    <div class="movies__container">
      <h1>Popular</h1>

      <div ref="movies" class="movies__list">
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
import { mapState, mapGetters } from 'vuex'

export default {
  data() {
    return {
      IMG_PATH: 'https://image.tmdb.org/t/p/w500',
    }
  },
  computed: {
    ...mapState(['movies', 'movie']),
    ...mapGetters(['getName']),
  },

  mounted() {
    this.$store.dispatch('fetchMovies')
  },

  methods: {},
}
</script>

<style></style>

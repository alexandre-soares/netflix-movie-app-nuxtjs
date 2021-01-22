<template>
  <div class="movie">
    <Navbar />

    <div
      class="movie__wrapper"
      :data="movie.backdrop_path"
      :style="{
        backgroundImage: 'url(' + IMG_PATH + movie.backdrop_path + ')',
      }"
    ></div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Navbar from '../../components/layout/Navbar.vue'

export default {
  components: { Navbar },
  data() {
    return {
      IMG_PATH: 'https://image.tmdb.org/t/p/w1280',
    }
  },
  computed: {
    ...mapState(['movie']),
    ...mapGetters(['getMovie']),
  },
  beforeMount() {
    this.$store.dispatch('fetchMovie', this.$route.params.id)
  },
}
</script>

<style lang="scss" scoped>
.movie {
  height: 100vh;
  width: 100vw;
  display: block;

  &__wrapper {
    background-size: cover;
    background-position: left center;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
  }
}
</style>

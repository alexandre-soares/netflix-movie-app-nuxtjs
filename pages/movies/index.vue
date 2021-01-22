<template>
  <div class="movies">
    <Navbar />

    <Hero-movie v-if="false" />

    <Trending-movies />

    <Action-movies />
  </div>
</template>

<script>
import TrendingMovies from '@/components/movies/TrendingMovies.vue'
import ActionMovies from '../../components/movies/ActionMovies.vue'
import HeroMovie from '../../components/movies/HeroMovie.vue'
export default {
  components: {
    TrendingMovies,
    ActionMovies,
    HeroMovie,
  },
}
</script>

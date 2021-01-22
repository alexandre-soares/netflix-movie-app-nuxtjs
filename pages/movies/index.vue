<template>
  <div class="movies">
    <Navbar />
  </div>
</template>

<script>
import Navbar from '../../components/layout/Navbar.vue'
export default {
  components: { Navbar },
  data() {
    return {
      API_URL:
        'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=70baec9352c4f3421225b720de201f38&page=1',
      IMG_PATH: 'https://image.tmdb.org/t/p/w1280',
      SEARCH_API:
        'https://api.themoviedb.org/3/search/movie?&api_key=70baec9352c4f3421225b720de201f38&query="',
    }
  },
  mounted() {},
}
</script>

<style></style>

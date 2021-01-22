<template>
  <div class="hero"></div>
</template>

<script>
export default {
  data() {
    return {
      IMG_PATH: 'https://image.tmdb.org/t/p/w1280',
    }
  },
  mounted() {
    this.fetchMovie(1)
  },
  methods: {
    async fetchMovie(id) {
      const ip = await this.$axios.$get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=70baec9352c4f3421225b720de201f38&language=en-US`
      )

      console.log(ip)
    },
  },
}
</script>

<style></style>

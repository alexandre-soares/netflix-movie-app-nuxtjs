<template>
  <div>
    <Navbar />

    <div v-if="showInfo">
      {{ movie }}
    </div>

    <div
      class="movie"
      :style="{
        backgroundImage: 'url(' + IMG_PATH + movie.backdrop_path + ')',
      }"
    >
      <div class="movie__infos">
        <div class="relative">
          <h1>{{ movie.original_title }}</h1>
          <h2 v-if="movie.tagline">{{ movie.tagline }}</h2>
          <h2 v-if="movie.genres">
            Genres:
            <span
              v-for="genre in movie.genres"
              :key="genre.id"
              class="movie__genre"
            >
              {{ genre.name }}</span
            >
          </h2>
          <h2>Overview :</h2>
          <h2>{{ movie.overview }}</h2>
          <h2>Release Date</h2>
          <h2>{{ movie.release_date }}</h2>

          <div class="movie__rate">
            {{ movie.vote_average }}
          </div>
        </div>
      </div>
    </div>
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
      showInfo: false,
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
  background-size: cover;
  background-position: left center;
  background-repeat: no-repeat;
  height: 90vh;
  width: 100%;
  position: relative;
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, 0.5);
    box-shadow: inset 60rem 0rem 25rem #000000;
  }

  &__infos {
    position: relative;
    height: 100%;
    width: 50%;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: auto;
    margin-left: 5rem;

    & h1 {
      font-size: 7rem;
      width: 80%;
      margin-bottom: 30rem;
    }

    & h2 {
      width: 80%;
    }
  }

  &__genre {
    &:after {
      content: ',';
    }

    &:last-child:after {
      content: none;
    }
  }

  &__rate {
    position: absolute;
    top: 0;
    right: 0;
    padding: 2rem;
    font-size: 4rem;
    background-color: rgba(238, 238, 238, 0.808);
    color: #333;

    &--good {
      color: rgb(0, 59, 0);
      background-color: rgb(9, 148, 9);
    }

    &--average {
      color: rgb(126, 126, 0);
      background-color: rgb(202, 202, 39);
    }

    &--bad {
      color: rgb(148, 0, 0);
      background-color: rgb(255, 108, 108);
    }
  }
}
</style>

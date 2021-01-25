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
          <div>
            <h1 class="movie__title">{{ movie.original_title }}</h1>
            <h2 v-if="movie.tagline" class="movie__tagline">
              {{ movie.tagline }}
            </h2>
          </div>
          <div>
            <h2 v-if="movie.genres" class="movie__genres">
              Genres:
              <span
                v-for="genre in movie.genres"
                :key="genre.id"
                class="movie__genre"
              >
                {{ genre.name }}</span
              >
            </h2>
          </div>
          <div>
            <h2 class="movie__overview--title">Overview :</h2>
            <h2 class="movie__overview">{{ movie.overview }}</h2>
          </div>
          <div>
            <h2 class="movie__release--title">Release Date :</h2>
            <h2 class="movie__release">{{ movie.release_date }}</h2>
          </div>

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
  background-position: 200px center;
  background-repeat: no-repeat;
  height: 90vh;
  width: 100%;
  position: relative;
  z-index: 1;

  @media only screen and (max-width: $bp-medium) {
    background-position: center center;
  }

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

    @media only screen and (max-width: $bp-medium) {
      box-shadow: inset 4rem 4rem 25rem #000000;
    }
  }

  &__infos {
    position: relative;
    height: 100%;
    width: 50%;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-right: auto;
    margin-left: 5rem;

    @media only screen and (max-width: $bp-medium) {
      margin: 0 auto;
      width: 90%;
      text-align: center;
    }

    & h1 {
      font-size: 7rem;
      width: 80%;

      @media only screen and (max-width: $bp-medium) {
        text-align: center;
        width: 90%;
        margin: 1rem auto;
      }
    }

    & h2 {
      width: 80%;

      @media only screen and (max-width: $bp-medium) {
        margin-left: auto;
        margin-right: auto;
        text-align: center;
      }
    }
  }

  &__tagline {
    font-size: 3rem;
    font-weight: normal;
    width: 80%;

    @media only screen and (max-width: $bp-medium) {
      margin-left: auto;
      margin-right: auto;
      text-align: center;
    }
  }

  &__overview {
    font-size: 2rem;
    letter-spacing: 1px;
    line-height: 1.3;
    text-align: justify;
    font-weight: 400;
    margin: 2rem 0;

    &--title {
      font-size: 2.5rem;
      font-weight: normal;
    }
  }

  &__genres {
    font-size: 2rem;
    letter-spacing: 1px;
    line-height: 1.3;
    font-weight: 400;
    margin: 2rem 0;
  }

  &__release {
    font-size: 2rem;
    letter-spacing: 1px;
    line-height: 1.3;
    text-align: justify;
    font-weight: 400;
    margin: 2rem 0;
    &--title {
      font-size: 2.5rem;
      font-weight: normal;
    }
  }

  &__genre {
    font-size: 2rem;
    letter-spacing: 1px;
    line-height: 1.3;
    text-align: justify;
    font-weight: 400;
    margin: 2rem 0;
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

    @media only screen and (max-width: $bp-medium) {
      top: -30%;
    }

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

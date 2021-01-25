<template>
  <div>
    <nav class="navbar">
      <nuxt-link to="/" tag="div" class="navbar__logo">
        <img src="https://i.ibb.co/r5krrdz/logo.png" alt="" />
      </nuxt-link>
      <ul class="navbar__list">
        <li class="navbar__items"><a href="/movies">Accueil</a></li>
        <li class="navbar__items"><a href="#">Series</a></li>
        <li class="navbar__items"><a href="/movies">Films</a></li>
      </ul>
      <div class="navbar__right-side">
        <div
          class="navbar__search"
          :class="{
            navbar__open: wantsToSeach,
          }"
        >
          <i
            class="fas fa-search fa-3x"
            @click="wantsToSeach = !wantsToSeach"
          ></i>
          <input
            v-if="wantsToSeach"
            v-model="searchInput"
            type="text"
            placeholder="Titres, personnes, genres"
            autofocus
          />
        </div>
        <div class="navbar__profile">
          <img src="@/static/img/profile.png" alt="profile" />
        </div>
      </div>
    </nav>

    <div class="movies">
      <div class="movies__container">
        <h1>Results for {{ searchInput }}</h1>

        <transition-group
          name="fade"
          tag="div"
          class="movies__list"
          appear
          mode="out-in"
        >
          <nuxt-link
            v-for="(movie, index) in computedList"
            :key="index"
            tag="div"
            :to="'/movie/' + movie.id"
            class="movies__img"
          >
            <img :src="IMG_PATH + movie.poster_path" :alt="movie.poster_path" />
          </nuxt-link>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchInput: '',
      wantsToSeach: true,
      IMG_PATH: 'https://image.tmdb.org/t/p/w1280',
    }
  },
  computed: {
    computedList() {
      const vm = this
      return this.$store.state.movies.filter(function (item) {
        return item.original_title
          .toLowerCase()
          .includes(vm.searchInput.toLowerCase())
      })
    },
  },
  created() {
    this.searchInput = this.$route.query.query
    this.$store.dispatch('fetchMovies')
  },
}
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 5rem;
  background: rgb(20, 20, 20) none repeat scroll 0% 0%;

  &__logo {
    width: 17rem;
    cursor: pointer;
  }

  &__list {
    display: flex;
    margin-right: auto;
    margin-left: 4rem;
  }

  &__items {
    font-size: 1.9rem;
    margin: 0 2rem;
  }

  &__open {
    border: 1px solid #fff;
    padding: 1rem;
  }

  &__right-side {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__search {
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: 0.3s ease-in;

    & input {
      padding: 1rem 5rem 1rem 0.5rem;
      background-color: transparent;
      border: none;
      color: #fff;
      font-size: 1.4rem;
      width: 30rem;

      &::placeholder {
        color: rgb(129, 129, 129);
      }

      &:focus {
        outline: none;
      }
    }

    & i {
      color: #fff;
      margin-right: 1rem;
      cursor: pointer;
    }
  }

  &__profile {
    width: 5rem;
    margin: 0 0 0 2rem;

    & img {
      border-radius: 1rem;
    }
  }
}

.movies {
  & h1 {
    text-align: center;
    font-size: 3rem;
    letter-spacing: 1px;
    font-weight: 400;
  }
  &__container {
    margin: 2rem auto;
    width: 100%;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: 3rem auto;
    overflow: hidden;
    justify-content: center;
  }

  &__img {
    margin: 2rem;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

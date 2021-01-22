<template>
  <nav class="navbar">
    <div class="navbar__logo">
      <img src="https://i.ibb.co/r5krrdz/logo.png" alt="" />
    </div>
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
          type="text"
          placeholder="Titres, personnes, genres"
        />
      </div>
      <div class="navbar__profile">
        <img src="@/static/img/profile.png" alt="profile" />
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      wantsToSeach: false,
    }
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
</style>

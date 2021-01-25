export const state = () => ({
  movies: [],
  IMG_PATH: 'https://image.tmdb.org/t/p/w1280',
  movie: {},
})

export const getters = {
  getMovie: (state) => {
    return state.movie
  },
  getMovies: (state) => {
    return state.movies
  },
}

export const mutations = {
  SET_MOVIES(state, movies) {
    state.movies = movies
  },
  SET_MOVIE(state, movie) {
    state.movie = movie
  },
}

export const actions = {
  async fetchMovies({ commit }) {
    const movies = []

    for (let index = 1; index < 6; index++) {
      const ip = await this.$axios.$get(
        `https://api.themoviedb.org/3/movie/popular?api_key=70baec9352c4f3421225b720de201f38&page=${index}`
      )

      ip.results.forEach((movie) => {
        movies.push(movie)
      })
    }
    commit('SET_MOVIES', movies)
  },
  async fetchMovie({ commit }, id) {
    const ip = await this.$axios.$get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=70baec9352c4f3421225b720de201f38`
    )
    const movie = ip

    commit('SET_MOVIE', movie)
  },
}

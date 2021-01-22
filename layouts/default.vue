<template>
  <div>
    <Header />
    <Nuxt />
  </div>
</template>

<script>
import Header from '@/components/home/Header.vue'
export default {
  components: {
    Header,
  },
}
</script>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 62.5%;
}

body {
  font-family: 'Arial', sans-serif;
  --webkit-font-smoothing: antiliased;
  background: #000;
  color: #999;
}

ul {
  list-style: none;
}

h1,
h2,
h3,
h4 {
  color: #fff;
}

a {
  color: #fff;
  text-decoration: none;
}

p {
  margin: 0.5rem;
}

img {
  width: 100%;
}

.btn {
  display: inline-block;
  background: $primary-color;
  padding: 0.8rem 1.8rem;
  font-size: 1.6rem;
  text-align: center;
  border: none;
  cursor: pointer;
  margin-right: 0.5rem;
  outline: none;
  box-shadow: 0 0.1rem 0 rgba(0, 0, 0, 0.45);
  border-radius: 0.2rem;
  transition: 0.3s ease-in;

  &:hover {
    opacity: 0.9;
  }

  &--icon {
  }
  &--rounded {
    border-radius: 0.5rem;
  }

  &--xl {
    font-size: 2.4rem;
    padding: 1.9rem 2.4rem;
    text-transform: uppercase;
  }

  &--lg {
    font-size: 1.9rem;
    padding: 1.3rem 2rem;
    text-transform: uppercase;
  }
}
</style>

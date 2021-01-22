<template>
  <div>
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/layout/Footer.vue'
export default {
  components: {
    Footer,
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

  @media only screen and (max-width: $bp-large) {
    font-size: 58% !important;
    line-height: 1;
  }

  @media only screen and (max-width: $bp-medium) {
    font-size: 56% !important;
  }

  @media only screen and (max-width: $bp-medium) {
    font-size: 50% !important;
  }
}

body {
  font-family: 'Arial', sans-serif;
  --webkit-font-smoothing: antiliased;
  background: #141414;
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
  font-size: 1.6rem;
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
    background-color: #fff;
    color: $primary-color;
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

.container {
  max-width: 70%;
  margin: auto;
  overflow: hidden;
  padding: 0 2.5rem;
}

.text {
  &--md {
    font-size: 1.8rem;
    margin-bottom: 1.3rem;
  }

  &--lg {
    font-size: 2.2rem;
    margin-bottom: 1.3rem;
  }

  &--xl {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  &--center {
    text-align: center;
  }

  &--dark {
    color: #999;
  }
}

.relative {
  position: relative;
}
</style>

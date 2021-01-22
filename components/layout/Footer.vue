<template>
  <footer class="footer">
    <p>Questions? Call 1-866-579-7172</p>
    <div class="footer__cols">
      <ul>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Investor Relations</a></li>
        <li><a href="#">Ways To Watch</a></li>
        <li><a href="#">Corporate Information</a></li>
        <li><a href="#">Netflix Originals</a></li>
      </ul>
      <ul>
        <li><a href="#">Help Center</a></li>
        <li><a href="#">Jobs</a></li>
        <li><a href="#">Terms Of Use</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
      <ul>
        <li><a href="#">Account</a></li>
        <li><a href="#">Redeem Gift Cards</a></li>
        <li><a href="#">Privacy</a></li>
        <li><a href="#">Speed Test</a></li>
      </ul>
      <ul>
        <li><a href="#">Media Center</a></li>
        <li><a href="#">Buy Gift Cards</a></li>
        <li><a href="#">Cookie Preferences</a></li>
        <li><a href="#">Legal Notices</a></li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.footer {
  max-width: 75%;
  margin: 1.5rem auto;
  overflow: auto;
  color: #999;

  & a {
    color: #999;
    font-size: 1.3rem;
  }

  & p {
    margin-bottom: 2rem;
  }
  &__cols {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2.5rem;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: $bp-large) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  & li {
    line-height: 2.4;
  }
}
</style>

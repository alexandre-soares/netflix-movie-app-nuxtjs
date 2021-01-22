<template>
  <div class="showcase">
    <div class="showcase__top">
      <img src="https://i.ibb.co/r5krrdz/logo.png" alt="" />
      <a href="#" class="btn btn--rounded">Sign In</a>
    </div>
    <div class="showcase__content">
      <h1>See what's next</h1>
      <p>Watch anywhere. Cancel anytime</p>
      <a href="#" class="btn btn--lg">
        Watch Free For 30 Days <i class="fas fa-chevron-right btn--icon"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.showcase {
  width: 100%;
  height: 93vh;
  position: relative;
  background: url('https://i.ibb.co/vXqDmnh/background.jpg') no-repeat center
    center/cover;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, 0.6);
    box-shadow: inset 12rem 10rem 25rem #000000,
      inset -12rem -10rem 25rem #000000;
  }

  &__top {
    position: relative;
    height: 9rem;
    z-index: 2;

    & img {
      width: 17rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    & a {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translate(-50%, -50%);
    }
  }

  &__content {
    position: relative;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 18rem;
    z-index: 2;

    & h1 {
      font-weight: 600;
      letter-spacing: 1px;
      font-size: 6rem;
      line-height: 1.4;
      margin: 0 0 2.4rem;
    }

    & p {
      text-transform: uppercase;
      color: #fff;
      font-weight: 400;
      font-size: 2.2rem;
      line-height: 1.5;
      margin: 0 0 2.4rem;
    }
  }
}
</style>

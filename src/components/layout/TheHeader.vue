<template>
  <div class="header">
    <div class="heading">
      <div class="heading__logobox">
        <span class="heading__logo">parlor-game scores</span>
      </div>
      <div class="logoutbox">
        <svg-icon icon-name="exit"></svg-icon>
        <span class="logoutbox__text">Log out</span>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from "../SvgIcon";

export default {
    components: {
        SvgIcon
    }
}
</script>

<style scoped lang="scss">
.header {
  height: 10rem;
  width: 100%;
  border-radius: 3px 3px 0 0;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.5);
  position: relative;
}

.heading {
  border-radius: 3px 3px 0 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__logobox {
    margin-left: 4rem;
  }

  &__logo {
    text-transform: uppercase;
    font-family: "Fontdiner Swanky", cursive;
    font-size: 4rem;
    font-weight: 800;
    display: inline-block;
    color: rgb(60, 107, 236);
    @supports (-webkit-background-clip: text) or (background-clip: text) {
      background-image: linear-gradient(
        to right top,
        rgb(60, 107, 236),
        rgb(174, 194, 247)
      );
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
  }
}

.logoutbox {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 0 0 10%;
  margin-right: 4rem;
  color: rgba(0, 0, 0, 0.5);
  @media only screen and (hover: none) {
    color: rgba(0, 0, 0, 0.8);
  }
  cursor: pointer;

  &__text {
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  &:hover {
    color: rgba(0, 0, 0, 0.8);
  }
}
</style>
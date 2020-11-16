<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <router-link to="Home" tag="li" class="navigation__item" active-class="active active--blue">
        <span class="navigation__icon">
          <svg-icon icon-name="home"></svg-icon>
        </span>
        <span class="navigation__link">Home</span>
      </router-link>
      <router-link to="Group" tag="li" class="navigation__item" active-class="active active--green">
        <span class="navigation__icon">
          <svg-icon icon-name="group"></svg-icon>
        </span>
        <span class="navigation__link">Group</span>
      </router-link>
      <router-link to="/" tag="li" class="navigation__item" active-class="active active--red" exact>
        <span class="navigation__icon">
          <svg-icon icon-name="heart"></svg-icon>
        </span>
        <span class="navigation__link">Friends</span>
      </router-link>
      <router-link
        to="Games"
        tag="li"
        class="navigation__item"
        active-class="active active--yellow"
      >
        <span class="navigation__icon">
          <svg-icon icon-name="cog"></svg-icon>
        </span>
        <span class="navigation__link">Settings</span>
      </router-link>
    </ul>
  </nav>
</template>

<script>
import SvgIcon from "../SvgIcon";

export default {
  components: {
    SvgIcon
  }
};
</script>

<style lang="scss" scoped>
.navigation {
  display: flex;
  justify-content: center;
  color: #999;

  &__list {
    list-style-type: none;
    display: flex;
    flex: 1;
    justify-content: space-evenly;
  }

  &__item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 12rem;
    height: 12rem;
    position: relative;
    cursor: pointer;
  }

  &__link {
    font-size: 2rem;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 1.1rem;
  }

  &__icon {
    transition: transform cubic-bezier(0, 0, 0, 1.55) 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: content-box;
  }
}

.active {
  &--red {
    color: rgb(243, 9, 9);
    & .navigation__icon {
      background-image: linear-gradient(
        to right top,
        rgb(243, 9, 9) 30%,
        rgb(255, 58, 58)
      );
    }
  }
  &--blue {
    color: rgb(60, 107, 236);
    & .navigation__icon {
      background-image: linear-gradient(
        to right top,
        rgb(60, 107, 236) 30%,
        rgb(174, 194, 247)
      );
    }
  }
  &--green {
    color: rgb(6, 184, 15);
    & .navigation__icon {
      background-image: linear-gradient(
        to right top,
        rgb(6, 184, 15),
        rgb(153, 241, 158)
      );
    }
  }
  &--yellow {
    color: rgb(255, 251, 9);
    & .navigation__icon {
      background-image: linear-gradient(
        to right top,
        rgb(255, 251, 9) 30%,
        rgb(255, 253, 112)
      );
    }
  }

  & .navigation__icon {
    width: 5.7rem;
    height: 5.7rem;
    border-radius: 50%;
    border: 5px solid #fff;
    transform: translateY(-1.5rem);
  }

  & .navigation__icon svg {
    fill: #fff !important;
  }

  & .navigation__link {
    transform: translateY(-1.8rem);
  }
}
</style>

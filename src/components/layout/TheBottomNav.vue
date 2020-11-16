<template>
  <div class="bottom-nav-container">
    <bottom-navigation />
  </div>
</template>

<script>
import BottomNavigation from "../ui/BottomNavigation.vue";
import SvgIcon from "../SvgIcon";

export default {
  name: "Header",
  components: {
    BottomNavigation,
    SvgIcon
  }
};
</script>

<style scoped lang="scss">
.bottom-nav-container {
  height: 10rem;
  width: 100%;
  border-radius: 3px 3px 0 0;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  bottom: 0;
}
</style>

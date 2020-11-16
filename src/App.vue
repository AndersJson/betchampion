<template>
  <div id="app">
    <div id="page">
      <the-header></the-header>
      <div class="content">
        <transition :name="transitionName" type="transition" mode="out-in">
          <router-view />
        </transition>
      </div>
      <the-bottom-nav />
    </div>
  </div>
</template>

<script>
import TheBottomNav from "@/components/layout/TheBottomNav.vue";
import TheHeader from "@/components/layout/TheHeader.vue";

export default {
  data() {
    return {
      transitionName: "slide-right"
    };
  },
  components: {
    TheBottomNav,
    TheHeader
  },
  watch: {
    $route(to, from) {
      const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length;
      this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
      console.log(this.transitionName);
    }
  }
};
</script>

<style lang="scss">
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Signika", sans-serif;
  font-weight: 400;
  color: #000;
  background: linear-gradient(
      to top,
      rgb(0, 71, 0),
      rgb(210, 255, 218)
    )
    no-repeat center / cover fixed;
  box-sizing: border-box;
}

#page {
  max-width: 164rem;
  min-height: 85vh; /* remove? */
  margin: 6rem auto 0;
  border-radius: 3px;
  box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.5);
  background-color: #cecdcd;
  overflow: hidden;
  position: relative;
}

.content {
  padding: 4rem;
}

/* Transitions */

/* Slide Right */
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.3s cubic-bezier(0.55, 0, 0.1, 1), opacity 0.3s;
}

.slide-left-enter,
.slide-right-enter {
  opacity: 0;
  transform: translate(40%, 0);
}

.slide-left-leave-active,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(-5%, 0);
}
</style>

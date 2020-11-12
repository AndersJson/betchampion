<template>
  <div class="alertbox" :class="alertType">
    <span v-if="dismissable" class="alertbox__close" @click="$emit('close')"></span>
    <div class="alertbox__title">
      <slot name="title"></slot>
    </div>
    <slot>Alertbox is showing!</slot>
  </div>
</template> 
<script>
export default {
  props: {
    alertType: {
      type: String,
      default: "info"
    },
    dismissable: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style lang="scss" scoped>
.alertbox {
  position: relative;
  padding: 1.3rem 2rem 1.3rem 1.3rem;
  border-radius: 3px;
  font-size: 1.3rem;

  &__title {
    font-weight: 600;
  }

  &__close {
    cursor: pointer;
    position: absolute;
    top: 0.8rem;
    right: 0.5rem;
    width: 1rem;
    height: 0.2rem;
    background-color: currentColor !important;
    transform: rotate(45deg);
    transform-origin: center;
  }

  &__close::after {
    content: "";
    position: absolute;
    top: 0rem;
    width: 100%;
    height: 100%;
    background-color: currentColor !important;
    transform: rotate(-90deg);
    transform-origin: 50%;
  }
}

.info {
  background-color: rgb(79, 126, 255);
  color: rgb(185, 195, 219);
}

.warning {
  background-color: rgb(252, 122, 122);
  color: rgb(48, 4, 4);
}
</style>
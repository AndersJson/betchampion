<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="name"></use>
  </svg>
</template>

<script>
// https://webpack.js.org/guides/dependency-management/#context-module-api
const requireAll = (requireContext) =>
  requireContext.keys().map(requireContext);
const req = require.context("../svg-icons", false, /\.svg$/);
requireAll(req);

export default {
  name: "SvgIcon",
  props: {
    iconName: {
      // icon filename
      type: String,
      required: true,
    },
    className: {
      // css class name
      type: String,
      default: "",
    },
  },
  computed: {
    name() {
      let icon = this.iconName;
      return icon ? `#icon-${icon}` : "";
    },
    svgClass() {
      let className = this.className;
      return className ? `svg-icon ${className}` : "svg-icon";
    },
  },
};
</script>

<style>
.svg-icon {
  width: 3rem;
  height: 3rem;
  fill: currentColor;
  overflow: hidden;
}
</style>

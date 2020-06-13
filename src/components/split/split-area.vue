<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script type="text/babel">
export default {
  name: "SplitArea",
  props: {
    size: {
      type: Number,
      default: -1
    },
    minSize: {
      type: Number,
      default: 0
    }
  },
  computed: {
    classes() {
      return `split split-` + this.$parent.direction;
    }
  },
  watch: {
    size(val) {
      this.$parent.changeAreaSize();
    },
    minSize(val) {
      this.$parent.changeAreaSize();
    }
  }
};
</script>
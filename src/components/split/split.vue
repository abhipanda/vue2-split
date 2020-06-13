<template>
  <div class="split">
    <slot></slot>
  </div>
</template>

<script type="text/babel">
import Split from "split.js";

export default {
  name: "Split",
  props: {
    direction: {
      type: String,
      default: "horizontal"
    },
    gutterSize: {
      type: Number,
      default: 8
    }
  },
  data() {
    return {
      elements: [],
      sizes: [],
      minSizes: [],
      instance: null
    };
  },
  methods: {
    init() {
      this.elements = [];
      this.sizes = [];
      this.minSizes = [];
      if (this.instance !== null) {
        this.instance.destroy();
      }
      this.instance = null;
      this.$slots.default.forEach(vnode => {
        if (
          vnode.componentOptions &&
          vnode.componentOptions.tag === "split-area"
        ) {
          this.elements.push(vnode.elm);
          if (vnode.componentInstance.size !== -1) {
            this.sizes.push(vnode.componentInstance.size);
          }
          this.minSizes.push(vnode.componentInstance.minSize);
        }
      });
      if (this.sizes.length === 1) {
        this.sizes.push(100 - this.sizes[0]);
      }
      if (this.sizes[0] !== 100) {
        this.instance = Split(this.elements, {
          direction: this.direction,
          gutterAlign: "end",
          sizes: this.sizes,
          minSize: this.minSizes,
          gutterSize: this.gutterSize,
          cursor: this.direction === "horizontal" ? "col-resize" : "row-resize",
          onDrag: () => {
            this.$emit("onDrag", this.instance.getSizes());
          },
          onDragStart: () => {
            this.$emit("onDragStart", this.instance.getSizes());
          },
          onDragEnd: str => {
            this.$emit("onDragEnd", this.instance.getSizes());
          }
        });
      }
    },
    changeAreaSize() {
      this.sizes = [];
      this.minSizes = [];
      this.init();
    },
    reset() {
      this.init();
    },
    getSizes() {
      return this.instance.getSizes();
    }
  },
  mounted() {
    this.init();
  },
  watch: {
    direction(val) {
      this.init();
    },
    gutterSize(val) {
      this.init();
    }
  },
  beforeDestroy() {
    if (this.instance !== null) {
      this.instance.destroy();
    }
  }
};
</script>

 <style>
.split {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  width: 100%;
}
.gutter {
  background-color: #eee;
  background-repeat: no-repeat;
  background-position: 50%;
}
.gutter.gutter-horizontal {
  cursor: col-resize;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==");
}
.gutter.gutter-vertical {
  cursor: row-resize;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFAQMAAABo7865AAAABlBMVEVHcEzMzMzyAv2sAAAAAXRSTlMAQObYZgAAABBJREFUeF5jOAMEEAIEEFwAn3kMwcB6I2AAAAAASUVORK5CYII=");
}
.split.split-horizontal,
.gutter.gutter-horizontal {
  height: 100%;
  float: left;
}
</style>


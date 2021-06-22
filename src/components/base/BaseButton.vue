<template>
  <div class="base-button">
    <button v-on="$listeners" v-bind="$attrs" :class="[`button-${color}`]">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "BaseButton",
  inheritAttrs: false,
  props: {
    color: {
      type: String,
      default: "primary",
    },
  },
};
</script>

<style scoped lang="scss">
.base-button {
  button {
    min-width: 200px;
    text-transform: uppercase;
    padding: 12px 16px;
    box-shadow: 4px 8px 50px -5px rgba(127, 150, 168, 0.2);
    border-radius: 24px;
    border: 0;
    transition: all 0.3s ease-out;
    font-weight: bold;
    font-family: $base-main-font;

    &.button-primary {
      background: #2faadb;
      color: $base-color-white;

      &:hover {
        background: #4a9bc6;
      }
    }

    &:hover {
      cursor: pointer;
      box-shadow: 4px 8px 50px -5px rgba(127, 150, 168, 0.5);
    }
  }
}
</style>

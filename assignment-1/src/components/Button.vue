<template>
  <button :class="classes" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    primary: {
      type: Boolean,
      default: false,
    },
    secondary: {
      type: Boolean,
      default: false,
    },
    large: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<template>
  <div>
    <h1 @click="count1++">
      {{ count1 }}
    </h1>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function () {
    return {
      count1: 0,
    };
  },
};
</script>

<template>
  <div>
    <h1 @click="count++">
      {{ count }}
    </h1>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function () {
    return {
      count: 0,
    };
  },
};
</script>

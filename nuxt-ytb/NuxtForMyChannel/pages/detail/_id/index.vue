<template>
  <h1>Dya la id {{ $route.params.id }}</h1>
</template>

<script>
// eslint-disable-next-line no-undef
definePageMeta({
  validate(context) {
    // eslint-disable-next-line no-console
    console.log(context)
  },
})
</script>

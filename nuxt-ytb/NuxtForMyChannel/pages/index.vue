<template>
  <div id="root">
    <header>
      <nav>
        <ul>
          <li>
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/detail">Detail</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/profile">Profile</nuxt-link>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

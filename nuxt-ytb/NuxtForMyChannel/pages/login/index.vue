<template>
  <section class="page">
    <div class="card card-form">
      <div class="card_body">
        <h3 class="text_center">Login</h3>
        <form @submit.prevent="onSubmit">
          <div class="form_group">
            <label for="email">Email</label>
            <input
              id="email"
              v-model="email"
              class="form_control"
              type="email"
              placeholder="example@gmail.com"
            />
          </div>
          <div class="form_group">
            <label for="password">Password</label>
            <input
              id="password"
              v-model="password"
              class="form_control"
              type="password"
              placeholder="Please enter password"
            />
          </div>
          <div class="form_group">
            <button type="submit" class="btn btn_success btn-submit">
              Login
            </button>
          </div>
          <div class="form_group">
            <label v-if="error" class="text_error">{{ error }}</label>
          </div>
        </form>
        <div class="other text_center">
          <span
            >Have your account?
            <nuxt-link to="/register" tag="a">Register</nuxt-link></span
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'auth',
  data() {
    return {
      email: '',
      password: '',
      error: '',
    }
  },
  methods: {
    onSubmit() {
      this.error = ''
      this.$store
        .dispatch('authenticateUser', {
          email: this.email,
          password: this.password,
          isLogin: true,
        })
        .then((result) => {
          if (result.success) {
            this.$router.push('/')
          }
        })
        .catch((e) => (this.error = e.data.error.message))
      // call api firebase
    },
  },
}
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  justify-content: center;
  padding-top: 100px;
  .card-form {
    width: 500px;
  }
  .btn-submit {
    width: 100%;
  }
}
</style>

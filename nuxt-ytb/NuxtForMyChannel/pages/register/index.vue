<template>
  <section class="page">
    <div class="card card-form">
      <div class="card_body">
        <h3 class="text_center">Register</h3>
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
            <label for="re-password">Re-password</label>
            <input
              id="re-password"
              v-model="rePassword"
              class="form_control"
              type="password"
              placeholder="Please enter re-password"
            />
          </div>
          <div class="form_group">
            <button type="submit" class="btn btn_success btn-submit">
              Register
            </button>
          </div>
          <div class="form_group">
            <label v-if="error" class="text_error">{{ error }}</label>
          </div>
        </form>
        <div class="other text_center">
          <span
            >Have your account?
            <nuxt-link to="/login" tag="a">Login here</nuxt-link></span
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
      rePassword: '',
      error: '',
    }
  },
  methods: {
    checkValidPassword() {
      return this.password === this.rePassword
    },
    onSubmit() {
      const validPassword = this.checkValidPassword()
      this.error = ''
      if (validPassword) {
        // call api firebase
        this.$store
          .dispatch('authenticateUser', {
            email: this.email,
            password: this.password,
          })
          .then((result) => {
            if (result.success) {
              this.error = 'Success register'
              alert(this.error)
              this.$router.push('/login')
            } else {
              this.error = 'Fail register'
              alert(this.error)
            }
          })
          .catch((e) => (this.error = e.message))
      } else {
        // eslint-disable-next-line no-console
        this.error = 'password is not valid'
      }
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

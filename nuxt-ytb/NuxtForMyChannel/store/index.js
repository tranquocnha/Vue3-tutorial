import Vuex from 'vuex'
import Cookies from 'js-cookie'

const createStore = () => {
  // eslint-disable-next-line import/no-named-as-default-member
  return new Vuex.Store({
    state: {
      details: [],
      token: null,
    },
    mutations: {
      addDetail(state, newDetail) {
        state.details.push(newDetail)
      },
      editDetail(state, editDetail) {
        const detailIndex = state.details.findIndex(
          (detail) => detail.id === editDetail.id
        )
        state.details[detailIndex] = editDetail
      },
      setDetails(state, details) {
        state.details = details
      },
      setToken(state, token) {
        state.token = token
      },
      clearToken(state) {
        state.token = null
      },
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return (
          context.app.$axios
            .$get(`${process.env.baseApiUrl}/details.json`)
            .then((data) => {
              const detailArr = []
              for (const key in data) {
                detailArr.push({ ...data[key], id: key })
              }
              vuexContext.commit('setDetails', detailArr)
            })
            // eslint-disable-next-line no-console
            .catch((e) => context.error(e))
        )
      },
      addDetail(vuexContext, detailsData) {
        return this.$axios
          .$post(
            `${process.env.baseApiUrl}/details.json?auth=${vuexContext.state.token}`,
            detailsData
          )
          .then((data) => {
            vuexContext.commit('addDetail', {
              ...detailsData,
              id: data.name,
            })
          })
          .catch((e) => {
            vuexContext.error()
          })
      },
      editDetail(vuexContext, detailsData) {
        const detailId = detailsData.id
        delete detailsData.id

        return this.$axios
          .$put(
            `${process.env.baseApiUrl}/details/${detailId}.json?auth=${vuexContext.state.token}`,
            detailsData
          )
          .then((data) => {
            vuexContext.commit('editDetail', { ...data, id: detailId })
          })
          .catch((e) => {
            vuexContext.error()
          })
      },
      setDetails(vuexContext, details) {
        // eslint-disable-next-line no-console
        vuexContext.commit('setDetails', details)
      },
      authenticateUser(vuexContext, credentials) {
        return new Promise((resolve, reject) => {
          let authUrlApi = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.fbApiKey}`

          if (!credentials.isLogin) {
            authUrlApi = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.fbApiKey}`
          }

          this.$axios
            .$post(authUrlApi, {
              email: credentials.email,
              password: credentials.password,
              returnSecureToken: true,
            })
            .then((data) => {
              vuexContext.commit('setToken', data.idToken)
              localStorage.setItem('token', data.idToken)
              localStorage.setItem(
                'tokenExpiration',
                new Date().getTime() + data.expiresIn * 1000
              )
              Cookies.set('token', data.idToken)
              Cookies.set('tokenExpiration', data.expiresIn * 1000)
              vuexContext.dispatch('setLogoutTimer', data.expiresIn * 1000)
              resolve({ success: true })
            })
            .catch((error) => {
              reject(error.response)
            })
        })
      },
      setLogoutTimer(vuexContext, duration) {
        setTimeout(() => {
          vuexContext.commit('clearToken')
        }, duration)
      },
      initAuth(vuexContext, req) {
        let token, tokenExpiration
        if (req) {
          if (!req.headers.cookie) return false
          const tokenKey = req.headers.cookie
            .split(';')
            .find((c) => c.trim().startsWith('token='))
          const tokenExpirationKey = req.headers.cookie
            .split(';')
            .find((c) => c.trim().startsWith('tokenExpiration='))

          if (!tokenKey || !tokenExpirationKey) {
            vuexContext.dispatch('logout')
            return false
          }

          token = tokenKey.split('=')[1]
          tokenExpiration = tokenExpirationKey.split('=')[1]
        } else {
          token = localStorage.getItem('token')
          tokenExpiration = localStorage.getItem('tokenExpiration')
          if (new Date().getTime() > tokenExpiration || !token) {
            vuexContext.dispatch('logout')
            return false
          }
        }

        vuexContext.dispatch(
          'setLogoutTimer',
          tokenExpiration - new Date().getTime()
        )
        vuexContext.commit('setToken', token)
      },
      logout(vuexContext) {
        vuexContext.commit('clearToken')
        Cookies.remove('token')
        Cookies.remove('tokenExpiration')
        localStorage.removeItem('token')
        localStorage.removeItem('tokenExpiration')
      },
    },
    getters: {
      details(state) {
        return state.details
      },
      isAuthenticated(state) {
        return state.token != null
      },
    },
  })
}

export default createStore

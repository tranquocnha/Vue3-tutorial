import axios from 'axios'
import Vuex from 'vuex'

const createStore = () => {
  // eslint-disable-next-line import/no-named-as-default-member
  return new Vuex.Store({
    state: {
      details: [],
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
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return (
          axios
            .get(
              'https://nuxt-ytb-default-rtdb.asia-southeast1.firebasedatabase.app/details.json'
            )
            .then((response) => {
              const detailArr = []
              for (const key in response.data) {
                detailArr.push({ ...response.data[key], id: key })
              }
              vuexContext.commit('setDetails', detailArr)
            })
            // eslint-disable-next-line no-console
            .catch((e) => context.error(e))
        )
      },
      addDetail(vuexContext, detailsData) {
        return axios
          .post(
            'https://nuxt-ytb-default-rtdb.asia-southeast1.firebasedatabase.app/details.json',
            detailsData
          )
          .then((result) => {
            vuexContext.commit('addDetail', {
              ...detailsData,
              id: result.data.name,
            })
          })
          .catch((e) => {
            vuexContext.error()
          })
      },
      editDetail(vuexContext, detailsData) {
        const detailId = detailsData.id
        delete detailsData.id

        return axios
          .put(
            `https://nuxt-ytb-default-rtdb.asia-southeast1.firebasedatabase.app/details/${detailId}.json`,
            detailsData
          )
          .then((result) => {
            vuexContext.commit('editDetail', { ...result.data, id: detailId })
          })
          .catch((e) => {
            vuexContext.error()
          })
      },
      setDetails(vuexContext, details) {
        // eslint-disable-next-line no-console
        vuexContext.commit('setDetails', details)
      },
    },
    getters: {
      details(state) {
        return state.details
      },
    },
  })
}

export default createStore

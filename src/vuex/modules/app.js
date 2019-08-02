import Cookies from 'js-cookie'
import { getLanguage } from '@/languages/index'
import { DEVICE_TYPE } from '@/utils/common'

const state = {
  device: DEVICE_TYPE.PC,
  language: getLanguage()
}

const mutations = {
  SET_DEVICE: (state, device) => {
    state.device = device
  },

  SET_LANGUAGE: (state, language) => {
    state.language = language
    Cookies.set('language', language, { expires: 365 })
  }
}

const actions = {
  setDevice ({ commit }, device) {
    commit('SET_DEVICE', device)
  },

  setLanguage ({ commit }, language) {
    commit('SET_LANGUAGE', language)
  }
}

export default {
  strict: process.env.NODE_ENV !== 'production',
  namespaced: true,
  state,
  mutations,
  actions
}

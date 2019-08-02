import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'

Vue.use(VueI18n)

const langFiles = require.context('./', false, /\.json$/)
const messages = langFiles.keys().reduce((messages, filePath) => {
  const local = filePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = langFiles(filePath)
  messages[local] = value
  return messages
}, {})

export function getLanguage () {
  const chooseLanguage = Cookies.get('language')
  if (chooseLanguage) return chooseLanguage

  // if has not choose language
  const language = (navigator.language || navigator.browserLanguage).toLowerCase()
  const locales = Object.keys(messages)
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale
    }
  }
  return 'ko'
}

export default new VueI18n({
  locale: getLanguage(),
  fallbackLocale: 'ko',
  messages
})

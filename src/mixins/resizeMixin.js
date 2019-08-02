import store from '@/vuex/store'
import { DEVICE_TYPE } from '@/utils/common'

export default {
  computed: {
  },
  beforeMount () {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onResize, { passive: true })
    }
  },
  mounted () {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
  },
  methods: {
    onResize () {
      if (!document.hidden) {
        const isMobile = window.innerWidth < 768
        const isTablet = !isMobile && window.innerWidth < 1020

        const device = isMobile ? DEVICE_TYPE.MOBILE : isTablet ? DEVICE_TYPE.TABLET : DEVICE_TYPE.PC
        device !== store.getters.device && store.dispatch('app/setDevice', device)
      }
    }
  }
}

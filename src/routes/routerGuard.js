import router from './'

router.beforeEach(async (to, from, next) => {
  // check page auth here
  next()
})

router.afterEach(() => {
})

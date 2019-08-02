<template>
  <div class="default-layout">
    <app-header></app-header>
    <app-main></app-main>

    <app-footer></app-footer>
  </div>
</template>
<script>
import { AppMain, AppHeader, AppFooter } from './components'

export default {
  name: 'DefaultLayout',
  components: {
    AppMain,
    AppHeader,
    AppFooter
  }
}
</script>

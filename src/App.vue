<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import resizeMixin from '@/mixins/resizeMixin'
export default {
  name: 'App',
  mixins: [resizeMixin]
}
</script>

<template>
  <div class="home">
    어서와 홈화면이야
    <router-link :to="{name:'Main'}">메인</router-link>
  </div>
</template>
<script>
export default {
  name: 'home',
  components: {
  }
}
</script>

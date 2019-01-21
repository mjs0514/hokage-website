<template>
  <div id="app">
    <MenuBar></MenuBar>
    <router-view></router-view>
    <FooterBar></FooterBar>
  </div>
</template>

<script>
import MenuBar from '@/components/common/MenuBar'
import FooterBar from '@/components/common/FooterBar'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    MenuBar,
    FooterBar
  }
}
</script>

<style>
</style>

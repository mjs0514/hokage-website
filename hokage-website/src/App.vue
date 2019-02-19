<template>
  <div id="app">
    <TopMenu/>
    <router-view/>
  </div>
</template>

<script>
import TopMenu from '@/components/common/top-menu'
export default {
  name: 'App',
  components: {
    TopMenu
  }
}
</script>

<style>
</style>

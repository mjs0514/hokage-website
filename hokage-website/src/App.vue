<template>
  <div id="app">
    <TopMenu/>
    <router-view id="content"></router-view>
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
#content {margin-top: 56px;} /* 모든 바디 컨텐츠는 탑 메뉴높이만큼 마진을 가짐 */
</style>

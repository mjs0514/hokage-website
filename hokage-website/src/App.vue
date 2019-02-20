<template>
  <div id="app">
    <TopMenu/>
    <router-view id="content"></router-view>
  </div>
</template>

<script>
import TopMenu from '@/components/common/TopMenu'
export default {
  name: 'App',
  components: {
    TopMenu
  }
}
</script>

<style>
#content {margin-top: 56px;} /* 모든 바디 컨텐츠는 탑 메뉴높이만큼 마진을 가짐 */
@media all and (min-width: 1024px)
{ /* 모든 바디 컨텐츠는 특정 크기 이상으로 커지지 않음*/
  #content { width:1024px; position:relative; left:50%; transform:translateX(-50%);}
}
</style>

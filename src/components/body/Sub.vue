<template>
  <div id="sub_main">
    <p>
      Sub components id : {{this.$route.params.lnbMenu}}
    </p>
    <a0menu v-if="this.$route.params.lnbMenu == 'A0'"></a0menu>
    <div v-else>
      일치하는 sub menu가 없습니다.
    </div>
  </div>
</template>
<script>
import A0menu from '@/components/body/A0menu'

export default {
  name:"Sub",
  components:{
    A0menu
  }
}
</script>

<style>

</style>

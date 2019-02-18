<template>
  <div id="sub_main">
    <p>
      Sub components id : {{this.$route.params.lnbMenu}}
    </p>
    <a0menu v-if="this.$route.params.lnbMenu == 'A0'"></a0menu>
    <a1menu v-else-if="this.$route.params.lnbMenu == 'A1'"></a1menu>
    <a2menu v-else-if="this.$route.params.lnbMenu == 'A2'"></a2menu>
    <a3menu v-else-if="this.$route.params.lnbMenu == 'A3'"></a3menu>

    <C0menu v-if="this.$route.params.lnbMenu == 'C0'"></C0menu>
    <C1menu v-else-if="this.$route.params.lnbMenu == 'C1'"></C1menu>
    <div v-else>
      일치하는 sub menu가 없습니다.
    </div>
  </div>
</template>
<script>
import A0menu from '@/components/body/A0menu'
import A1menu from '@/components/body/A1menu'
import A2menu from '@/components/body/A2menu'
import A3menu from '@/components/body/A3menu'
import C0menu from '@/components/body/C0menu'
import C1menu from '@/components/body/C1menu'

export default {
  name:"Sub",
  components:{
    A0menu,
    A1menu,
    A2menu,
    A3menu,
    C0menu,
    C1menu
  }
}
</script>

<style>
</style>

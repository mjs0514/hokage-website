<template>
  <main>
    <div>
      Main components id : {{this.$route.params.gnbMenu}}
    </div>
<<<<<<< Updated upstream
    <Amenu v-if="this.$route.params.gnbMenu == 'A'"></Amenu>
=======
    <CMenu v-if="this.$route.params.gnbMenu == 'C'"></CMenu>
>>>>>>> Stashed changes
    <router-view></router-view>
  </main>
</template>
<script>
<<<<<<< Updated upstream
import Amenu from '@/components/body/Amenu'
export default {
  name:"Main",
  components : {
    Amenu
=======
import CMenu from '@/components/body/CMenu'

export default {
  name:"Main",
  components: {
    CMenu
>>>>>>> Stashed changes
  }
}
</script>
<style>
main {
  clear: both;
}

</style>

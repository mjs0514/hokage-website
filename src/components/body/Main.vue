<template>
  <main>
    <div>
      Main components id : {{this.$route.params.gnbMenu}}
    </div>
    <Amenu v-if="this.$route.params.gnbMenu == 'A'"></Amenu>
    <router-view></router-view>
  </main>
</template>
<script>
import Amenu from '@/components/body/Amenu'
export default {
  name:"Main",
  components : {
    Amenu
  }
}
</script>
<style>
main {
  clear: both;
}

</style>

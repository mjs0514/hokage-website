<template>
  <main>
    <div>
      Main components id : {{this.$route.params.gnbMenu}}
    </div>
    <Amenu v-if="this.$route.params.gnbMenu == 'A'"></Amenu>
    <Cmenu v-if="this.$route.params.gnbMenu == 'C'"></Cmenu>
    <router-view></router-view>
  </main>
</template>

<script>
import Amenu from '@/components/body/Amenu'
import Cmenu from '@/components/body/Cmenu'
export default {
  name:"Main",
  components : {
    Amenu,
    Cmenu
  }
}
</script>

<style>
main {
  clear: both;
}
</style>

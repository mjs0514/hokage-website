<template>
  <main>
    <div>
      Main components id : {{this.$route.params.gnbMenu}}
    </div>
    <Amenu v-if="this.$route.params.gnbMenu == 'A'"></Amenu>
    <Bmenu v-if="this.$route.params.gnbMenu == 'B'"></Bmenu>
    <Cmenu v-if="this.$route.params.gnbMenu == 'C'"></Cmenu>
    <router-view></router-view>

  </main>
</template>

<script>
import Amenu from '@/components/body/Amenu'
import Cmenu from '@/components/body/Cmenu'
import Bmenu from '@/components/body/Bmenu'
export default {
  name:"Main",
  components : {
    Amenu,
    Bmenu,
    Cmenu
  }
}
</script>

<style>
main {
  clear: both;
}
</style>

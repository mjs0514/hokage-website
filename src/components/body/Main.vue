<template>
  <main>
    <div>
      Main components id : {{this.$route.params.gnbMenu}}
    </div>
    <router-view></router-view>
  </main>
</template>
<script>
export default {
  name:"Main"
}
</script>
<style>
main {
  clear: both;
}

</style>

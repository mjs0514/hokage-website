<template>
  <div>
    a3
  </div>
</template>
<script>
export default {
  name:'a3menu',
  mounted: function(){
    // var test = require('../../utils/test.js');
    // // console.log(test.m1());
    // // console.log(test.m2());
    // console.log(test.m3());
    // console.log(test.m4());
    
    // var scriptEl = document.createElement('script');
    // scriptEl.type='text/javascript';
    // scriptEl.src='https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.js';
    // document.getElementsByTagName('head')[0].appendChild(scriptEl);

    // var test = require('../../utils/test.js');
    // console.log(test.action());

    require(['@/utils/test'], function(test){
//1 case
      //console.log(test.a());

//2 case
      // var result = test.add(2,3);
      // console.log(result);

//3 case
    console.log(test.action());
    });
  }
}
</script>
<style>
</style>

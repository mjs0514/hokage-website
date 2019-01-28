<template>
  <div>
    <a href="#" @click="htmledit('bold')">볼드</a>
    <a href="#" @click="htmledit('italic')">이탤릭</a>
    <a href="#" @click="htmledit('underline')">언더라인</a>
    <iframe name="dhtmlframe"></iframe>
  </div>
</template>
<script>
export default {
  name:'a1menu',
  data () {
    return {

    }
  },
  methods :{
    htmledit: function(excute){
      dhtmlframe.document.execCommand(excute);
    }
  },
  mounted: function(){
    dhtmlframe.document.designMode="On";
  }
}
</script>
<style>
</style>

<template>
  <div>
    <p>
      ace editor : editor 컴포넌트에 옵션줄 수 있는 방법 2가지 존재
    </p>
    <div @keyup.ctrl.s.exact="getKey">
      <AceEditor ref="myEditor" v-model="contents" lang="javascript" theme="chrome" width="500" height="200" @init="initEditor"></AceEditor>
    </div>
    <button type="button" class="btn btn-primary" @click="saveCode">저장</button>
  </div>
</template>
<script>
/* ES6 vs CommonJS 방식인지 AMD인지 정확히 잘 모르겠음. 둘 중에 어떤 방식으로 해야할지 ?
vue2-ace-editor 는 CommonJS 모듈 포맷을 따름, brace는 좀더 분석이 필요
*/

export default {
  name:'a2menu',
  data (){
    return {
      contents:''
    }
  },
  mounted: function(){
    /* 방법1 */
    let editor = this.$refs.myEditor.editor;
    editor.setOptions({
      enableBasicAutocompletion: true
    });
  },
  methods: {
    initEditor : function(editor){

      /* 방법2 */
      // editor.setOptions({
      //   enableBasicAutocompletion: true
      // });

      require('brace/ext/language_tools') //language extension prerequsite...
      require('brace/mode/html')
      require('brace/mode/javascript')    //language
      require('brace/mode/less')
      require('brace/theme/chrome')
      require('brace/snippets/javascript') //snippet
    },
    saveCode : function(){
      console.log(this.contents);
    },
    getKey : function(event){
      console.log(event);
    }
  },
  components:{
    AceEditor : require('vue2-ace-editor')
  }
}
</script>
<style>
</style>

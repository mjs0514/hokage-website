<template>
  <div>
    <p>
      ace editor : editor 컴포넌트에 옵션줄 수 있는 방법 2가지 존재
    </p>
    <AceEditor ref="myEditor"  v-model="contents" lang="javascript" theme="chrome" width="500" height="200"></AceEditor>
  </div>
</template>
<script>

/* ES6 vs CommonJS 방식인지 AMD인지 정확히 잘 모르겠음. 둘 중에 어떤 방식으로 해야할지 ? */
import AceEditor from 'vue2-ace-editor'
import js from 'brace/mode/javascript'
import chrome from 'brace/theme/chrome'
require('brace/ext/language_tools')

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

      // require('brace/ext/language_tools') //language extension prerequsite...
      // require('brace/mode/html')
      // require('brace/mode/javascript')    //language
      // require('brace/mode/less')
      // require('brace/theme/chrome')
      // require('brace/snippets/javascript') //snippet
    }
  },
  components:{
    AceEditor
  }
}
</script>
<style>
</style>

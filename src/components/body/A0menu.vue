<template>
  <div>
    <p>
      A0menu 입니다.
    </p>
    <div>
      <p>
        toast-ui editor section
      </p>
      <editor v-model="inputData" previewStyle="vertical" :options="editorOptions"/>
      <p>
        toast-ui view section
      </p>
      <viewer :value="inputData"/>
    </div>



  </div>
</template>
<script>
import 'tui-editor/dist/tui-editor.css';
import 'tui-editor/dist/tui-editor-contents.css';
import 'codemirror/lib/codemirror.css';
import Editor from '@toast-ui/vue-editor/src/Editor.vue'
import 'highlight.js/styles/github.css';
import Viewer from '@toast-ui/vue-editor/src/Viewer.vue'

export default {
  name:'a0menu',
  components:{
    Editor,
    Viewer
  },
  watch: {
    inputData : function(data){
      console.log('inputData:'+data);
    }
  },
  data () {
    return {
      inputData:'test 입니다',
      editorOptions:{
        usageStatistics: false,
        hideModeSwitch: false
      }
    }
  }
}
</script>
<style>
pre code {
  background-color: #eee;
  border: 1px solid #999;
  display: block;
  padding: 20px;
}
</style>

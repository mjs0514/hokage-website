<template>
  <div style="text-align: center">
    <div class="row col-md-10" style="position: absolute; width: 100%; height: 60%; top: 0; left: 0; bottom: 0; right: 0; margin: auto;">
        <input type="text" class="form-control" v-model="revisedContents" placeholder="수정할 업무명을 입력하세요~">
        <input class="col-md-6" style="float: left;" @click="revise()" type="button" value="수정">
        <input class="col-md-6" style="float: right;" @click="$emit('close')" type="button" value="취소">
    </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
          revisedContents:'',
      }
  },
  props: [
    'index', 'todos'
  ],
  methods : {
      revise(){
          this.todos[this.index].contents = this.revisedContents;
          this.revisedContents = null;
          localStorage.setItem('todos', JSON.stringify(this.todos));
          this.$emit('close');
      }
  }
}
</script>

<style>
</style>

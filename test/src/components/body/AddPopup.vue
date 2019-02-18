<template>
  <div style="text-align: center">
    <div class="row col-md-10" style="position: absolute; width: 100%; height: 60%; top: 0; left: 0; bottom: 0; right: 0; margin: auto;">
        <input type="text" class="form-control" v-model="subTask" placeholder="하위 업무를 입력하세요~">
        <input class="col-md-6" style="float: left;" @click="add()" type="button" value="추가">
        <input class="col-md-6" style="float: right;" @click="$emit('close')" type="button" value="취소">
    </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
          subTask:'',
      }
  },
  props: [
    'index', 'todos'
  ],
  methods : {
      add() {
        if (this.subTask != null) {
          this.todos[this.index].children.push({
            contents: this.subTask
          });
          this.subTask = null;
          localStorage.setItem('todos', JSON.stringify(this.todos));
          this.$emit('close');
        }
      }
  }
}
</script>

<style>
</style>

<template>
<div class="container">
  <h2>Todo List</h2>
  <div style="width:353px; height:50px;">
    <button type="button" style="float:right" @click="removeAll()">초기화</button>
  </div>
  <div class="input-group">
    <input type="text" class="input-form" placeholder="할 일을 입력하세요~" v-model="todo" v-on:keyup.enter="createTodo(todo)">
    <button type="button" class="input-button" @click="createTodo(todo)">추가</button>
  </div>
  <ul class="list-group">
    <li class="list-item" v-for="(todo,index) in todos">
      {{todo.item}}
      <button type="button" class="remove-button" @click="remove(index)">삭제</button>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'TodoPage',
  data() {
    return {
      todos: JSON.parse(localStorage.getItem('todos'))
    }
  },
  methods: {
    createTodo(todo) {
      if (localStorage.getItem('todos') == null) {
        localStorage.setItem('todos', JSON.stringify([]));
      }
      if (this.todo != null) {
        var list = JSON.parse(localStorage.getItem('todos'));
        list.push({
          item: todo
        });
        localStorage.setItem('todos', JSON.stringify(list));
        window.location.reload();
      }
    },
    remove(index) {
      var list = JSON.parse(localStorage.getItem('todos'));
      list.splice(index, 1);
      if (list.length == 0) {
        localStorage.removeItem('todos');
      } else {
        localStorage.setItem('todos', JSON.stringify(list));
      }
      window.location.reload();
    },
    removeAll() {
      localStorage.removeItem('todos');
      window.location.reload();
    }
  }
}
</script>

<style>
.container {
  margin-left: 20px;
}

.input-group {
  height: 40px;
}

.input-form {
  float: left;
  width: 300px;
  height: 30px;
  border-width: 1px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}

.input-button {
  float: left;
  width: 50px;
  height: 34px;
  background-color: white;
  border-color: #F2F2F2;
  border-width: 1px;
  border-left-width: 0px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}

.list-group {
  list-style: none;
  padding-left: 0px;
  width: 350px;
}

.list-item {
  height: 50px;
}

.remove-button {
  float: right;
  font-size: 15px;
  margin-right: 1px;
  border: none;
  cursor: pointer;
}
</style>

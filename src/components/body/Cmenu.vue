<template>
<div class="container">
  <h2>Todo List</h2>
  <div style="width:453px; height:40px;">
    <button type="button" style="float:right" @click="removeAll()">초기화</button>
  </div>
  <div class="input-group">
    <input type="text" class="input-form" placeholder=" 할 일을 입력하세요~" v-model="contents" v-on:keyup.enter="createTodo(contents)">
    <button type="button" class="input-button" @click="createTodo(contents)">추가</button>
  </div>
  <ul class="list-group">
    <li class="list-item" v-for="(todo,index) in todos" :key="todo.id" v-bind:class="{completed: todo.checked}">
      <input type="checkbox" v-model="todo.checked" :key="todo.id" @change="complete()"/>
      {{todo.contents}}
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
      count: Number(localStorage.getItem('count')),
      contents: '',
      checked: false,
      todos: JSON.parse(localStorage.getItem('todos'))
    }
  },
  methods: {
    createTodo(contents) {
      if (this.todos == null) {
        this.todos = [];
        this.count = 0;
      }
      if (this.contents != null) {
        this.todos.push({
          id: this.count,
          contents: contents,
          checked: false
        });
        this.contents = null;
        this.count = this.count + 1;
        localStorage.setItem('todos', JSON.stringify(this.todos));
        localStorage.setItem('count', this.count);
      }
    },
    complete(index) {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    },
    remove(index) {
      this.todos.splice(index, 1);
      if (this.todos.length == 0) {
        localStorage.removeItem('todos');
        localStorage.removeItem('count');
        this.count = 0;
      } else {
        localStorage.setItem('todos', JSON.stringify(this.todos));
      }
    },
    removeAll() {
      this.todos = [];
      localStorage.removeItem('todos');
      localStorage.removeItem('count');
      this.count = 0;
    }
  }
}
</script>

<style>
.container {
  margin-left: 20px;
}

.input-group {
  height: 50px;
}

.input-form {
  float: left;
  width: 400px;
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
  width: 450px;
}

.list-item {
  height: 50px;
}

.remove-button {
  float: right;
  font-size: 15px;
  margin-right: 3px;
  border: none;
  cursor: pointer;
}

.completed {
  text-decoration: line-through;
  color: red;
}
</style>

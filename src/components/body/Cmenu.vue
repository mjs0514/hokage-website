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
    <li class="list-item" v-for="(todo,index) in todos" ref="item">
      <input type="checkbox" @click="complete(index)"/>
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
      todos: JSON.parse(localStorage.getItem('todos'))
    }
  },
  methods: {
    createTodo(contents) {
      if (this.todos == null) {
        this.todos = [];
      }
      if (this.contents != null) {
        this.todos.push({
          contents: contents
        });
        this.contents = null;
        localStorage.setItem('todos', JSON.stringify(this.todos));
      }
    },
    complete(index) {
      if (this.$refs.item[index].children.item(0).checked == true) {
        this.$refs.item[index].classList.add('completed');
      } else {
        this.$refs.item[index].classList.remove('completed');
      }
    },
    remove(index) {
      this.todos.splice(index, 1);
      if (this.todos.length == 0) {
        localStorage.removeItem('todos');
      } else {
        localStorage.setItem('todos', JSON.stringify(this.todos));
      }
    },
    removeAll() {
      this.todos = [];
      localStorage.removeItem('todos');
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

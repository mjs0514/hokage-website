<template>
  <div class="container">
    <h2>Todo List</h2>
    <div class="input-group">
      <input type="text" class="input-form" placeholder="할 일을 입력하세요~" v-model="todo" v-on:keyup.enter="create(todo)">
      <button type="button" class="input-button" @click="create(todo)">추가</button>
    </div>
    <ul class="list-group">
      <li class="list-item" v-for="todo in todos">
      {{todo.name}}
        <div class="dropdown">
          <button type="button" @click="remove()" class="remove-button">더 보기</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'TodoPage',
    data () {
      return {
        todos: JSON.parse(localStorage.getItem('todos'))
      }
    },
    methods:{
      create() {
      },
      remove() {
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
    display: inline-block;
    float: left;
    width: 300px;
    height: 30px;
    border-color: #F2F2F2;
    border-width: 1px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  .input-button {
    display: inline-block;
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
  .button {
    float: right;
    display: inline-block;
  }
  .remove-button {
    font-size: 13px;
    border: none;
    cursor: pointer;
  }
</style>

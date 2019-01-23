<template>
  <div class="container">
    <h2>Todo List</h2>
    <div class="input-group">
      <input type="text" class="input-form" placeholder="할 일을 입력하세요~">
      <button class="input-button" type="button">추가</button>
    </div>
    <ul class="list-group">
      <li class="list-item" v-for="todo in todos">
      {{todo.name}}
        <div class="dropdown">
          <button type="button" data-toggle="dropdown" aria-haspopup="ture" aria-expanded="false">더 보기</button>
          <ul class="dropdown-menu">
            <li>삭제</li>
          </ul>
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
        todos: [
          {
            name:'페이지 만들기'
          },
          {
            name:'밀린 드라마 보기'
          }
        ]
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
    width: 300px;
  }
  .list-item {
    height: 50px;
  }
  .dropdown {
    float: right;
  }
</style>

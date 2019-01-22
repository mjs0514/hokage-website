<template>
  <div class="title">
    <h2>Todo List</h2>
    <div class="input-group">
      <input type="text" class="input-form" placeholder="할 일을 입력하세요~">
      <span>
        <button class="input-button" type="button">추가</button>
      </span>
    </div>
    <ul>
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

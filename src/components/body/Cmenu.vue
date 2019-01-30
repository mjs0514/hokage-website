<template>
<div class="container">
  <modals-container />
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
      <input type="checkbox" v-model="todo.checked" @change="complete()"/>
      {{todo.contents}}
        <span class='menu-container'>
          <img src="src/assets/menu-icon.png" class="beforeClick" @click="imgClick(index)" width="15px" height="15px" ref="img"/>
            <img src="src/assets/hand-icon.png" class="hand" width="15px" height="15px" ref="hand"/>
            <ul class="sub-menu" ref="menu">
              <a href="#" @click="revise(index)"><li>수정</li></a>
              <a href="#" @click="remove(index)"><li>삭제</li></a>
              <a href="#" @click="addChildren()"><li>하위업무</li></a>
            </ul>
        </span>
    </li>
  </ul>
</div>
</template>

<script>
import TodoPopup from './TodoPopup.vue'
var $ = require('jquery');
$(document).click(function(e){
  var target = $(e.target);
  var a = target.hasClass('menu-container');
  var b = target.hasClass('beforeClick');
  var c = target.hasClass('hand');
  var d = target.hasClass('sub-menu');
  if(!a && !b && !c && !d) {
    $('.afterClick').removeClass('afterClick');
    $('.shown').removeClass('shown');
  }
});
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
  components: {
    TodoPopup
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
    },
    imgClick(index) {
      if (this.$refs.img[index].classList.contains('afterClick')) {
        this.$refs.img[index].classList.remove('afterClick');
        this.$refs.hand[index].classList.remove('shown');
        this.$refs.menu[index].classList.remove('shown');
      } else {
        $('.afterClick').removeClass('afterClick');
        $('.shown').removeClass('shown');
        this.$refs.img[index].classList.add('afterClick');
        this.$refs.hand[index].classList.add('shown');
        this.$refs.menu[index].classList.add('shown');
      }
    },
    revise(index) {
      this.$modal.show(TodoPopup, {
        index : index,
        todos : this.todos
      }, {
        width: '500px',
        height: '200px',
        clickToClose: false,
        draggable: true})
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
  width: 560px;
}

.list-item {
  height: 50px;
}

.menu-container {
  float: right;
}

a:hover {
  text-decoration: none;
  cursor: default;
}

.beforeClick {
  margin-right: 129px;
  cursor: pointer;
}

.afterClick {
  margin-right: 36px;
}

.sub-menu {
  list-style:none;
  margin:0;
  padding:0;
  float: right;
  display: none;
}

.hand {
  display: none;
  margin-right: 10px;
}

.shown {
  display: inline-block;
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

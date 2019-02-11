<template>
<div class="container">
  <modals-container />
  <h2>To-Do List</h2>
  <div style="width:453px; height:40px;">
    <button type="button" style="float:right" @click="removeAll()">초기화</button>
  </div>
  <div class="input-group">
    <input type="text" class="input-form" placeholder=" 할 일을 입력하세요~" v-model="contents" v-on:keyup.enter="createTodo()">
    <button type="button" class="input-button" @click="createTodo()">추가</button>
  </div>
  <ul class="list-group">
    <li class="list-item" v-for="(todo,index) in todos" :key="todo.id" v-bind:class="{completed: todo.checked}" ref="list">
      <input type="checkbox" v-model="todo.checked" @change="complete()"/>
      {{todo.contents}}
        <span class="menu-container">
          <img src="src/assets/menu-icon.png" class="beforeClick" @click="imgClick(index)" width="15px" height="15px" ref="img"/>
            <img src="src/assets/hand-icon.png" class="hand" width="15px" height="15px" ref="hand"/>
            <ul class="sub-menu" ref="menu">
              <a href="#" @click="revise(index)"><li>수정</li></a>
              <a href="#" @click="remove(index)"><li>삭제</li></a>
              <a href="#" @click="addChildren(index)"><li>하위업무</li></a>
            </ul>
        </span>
        <ul style="margin-top: 10px;">
          <li v-for="(task, subIndex) in todo.children">
            {{task.contents}}
            <img src="src/assets/trashBin-icon.png" style="margin-left: 10px; cursor: pointer;" width="15px" height="15px" @click="removeTask(index, subIndex)"/>
          </li>
        </ul>
    </li>
  </ul>
</div>
</template>

<script>
import RevisePopup from './RevisePopup.vue'
import AddPopup from './AddPopup.vue'
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
      children: [],
      todos: JSON.parse(localStorage.getItem('todos'))
    }
  },
  components: {
    RevisePopup,
    AddPopup
  },
  methods: {
    createTodo() {
      if (this.todos == null) {
        this.todos = [];
        this.count = 0;
      }
      if (this.contents != null) {
        this.todos.push({
          id: this.count,
          contents: this.contents,
          checked: false,
          children: []
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
      this.$modal.show(RevisePopup, {
        index : index,
        todos : this.todos
      }, {
        width: '500px',
        height: '200px',
        clickToClose: false,
        draggable: true})
    },
    addChildren(index) {
      this.$modal.show(AddPopup, {
        index : index,
        todos : this.todos
      }, {
        width: '500px',
        height: '200px',
        clickToClose: false,
        draggable: true})
    },
    removeTask(index, subIndex) {
      this.todos[index].children.splice(subIndex, 1);
      localStorage.setItem('todos', JSON.stringify(this.todos));
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
  margin-left: 5px;
  width: 655px;
}

.list-item {
  height: auto;
  margin-top: 20px;
}

.menu-container {
  float: right;
}

a:hover {
  text-decoration: none;
  cursor: default;
}

.beforeClick {
  margin-right: 228px;
  cursor: pointer;
}

.afterClick {
  margin-right: 41px;
}

.sub-menu {
  list-style:none;
  margin:0;
  padding:0;
  float: right;
  display: none;
}

ul.sub-menu li {
  float: left;
  margin-left: 10px;
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

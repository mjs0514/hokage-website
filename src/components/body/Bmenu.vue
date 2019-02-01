<template>
<body>
  <div>
    BMenu 입니다
  </div>
  <div class="columns is-mobile" id="app">
      <div class="column is-10 is-offset-1">
        <!--title-->
        <p class="title is-2 is-spaced">가계부</p>

        <!--input form-->
        <div class="field has-addons">
          <p class="control">
            <input class="input" type="number" name="amount" v-model="amount" v-on:keyup.enter="createList(amount,des)" placeholder="금액">
          </p> <!--어떻게 위에 폼에서 des변수를 인식할수 있지?? v-model의 스코프가 어디까지 인가? -->
          <p class="control is-expanded">
            <input class="input" type="text" name="description" v-model="des" v-on:keyup.enter="createList(amount,des)" placeholder="내역">
          </p>
          <p class="control">
            <button class="button is-primary" v-on:click="createList(amount,des)">저장</button>
          </p>
        </div>

        <!--dashboard-->
        <div class="columns">
          <div class="column">
            <article class="message is-success">
              <div class="message-header">
                <p>Income</p>
              </div>
              <div class="message-body">
              </div>
            </article>
          </div>
          <div class="column">
            <article class="message is-danger">
              <div class="message-header">
                <p>Outcome</p>
              </div>
              <div class="message-body">
              </div>
            </article>
          </div>
          <div class="column">
            <article class="message is-info">
              <div class="message-header">
                <p>Total</p>
              </div>
              <div class="message-body">
              </div>
            </article>
          </div>
        </div>

        <!--contents-->
        <table border=1 class="table">
          <thead>
            <tr>
              <th>번호</th>
              <th>날짜</th>
              <th>범주</th>
              <th>금액</th>
              <th>내용</th>
              <th>변경</th>
              <th>빈칸</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(account,index) in accountLists">
              <td>{{index}}</td>
              <td>{{account.day}}</td>
              <td>{{account.category}}</td>
              <td>{{account.amount}}</td>
              <td>{{account.description}}</td>
              <td>
                <button class="button is-danger" v-on:click="deleteList(index)">삭제</button>
                <button class="button is-light">수정</button>
              </td>
              <td>
                <input class="input" type="number" name="amount" v-model="amount" v-on:keyup.enter="createList(amount,des)" placeholder="금액">
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</body>
</template>

<script>
export default {
name : 'AccountBook',
data () {
  return {
    accountLists: [
      {
        day: '2019.1.27',
        category: '수입',
        amount:'1000',
        description:"월급"
      },{
        day: '2019.1.28',
        category: '지출',
        amount:'500',
        description:"저녁"
      },
    ]
  }
},
methods:{
  createList : function(amount,des){
    this.accountLists.push({amount:amount, description:des}); //1. 데이터에 추가하는 방법
    localStorage.setItem('account', JSON.stringify(this.accountLists)); // 2. 로컬스토리지에 추가하는 방법
    // 위의 방법으로 하면 모든 accountlists의 리스트가 한번에 추가되는데 입력받은 키벨류만 추가하는 방법은??
  },
  deleteList : function(index) {
    this.accountLists.splice(index,1); // index부터 1개의 요소를 삭제함
  },
  editList : function(index) {
    // 수정버튼을 누르면 테이블의 모든 데이터를 수정할수있도록 입력 폼으로 변경되어야되는데?? 테이블안에서 입력폼넣을수 있나?
  }
}
}
</script>

<style>
  td {
    padding: 0px 20px;
  }
</style>

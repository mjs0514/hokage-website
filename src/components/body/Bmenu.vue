<template>
<body>
  <div>
    Bmenu 입니다
  </div>

  <div>
    <div>
      <!--title-->
      <p>가계부</p>
      <!--input form-->
      <div class="navbar fixed-bottom row" > <!--부트스트랩을 이용해 고정형 네비바를 만들고 싶을때-->
        <input class="col-md-5" type="number" name="amount" v-model="amount" v-on:keyup.enter="createList(amount,des)" placeholder="금액">
        <input class="col-md-5 form-control" type="text" name="description" v-model="des" v-on:keyup.enter="createList(amount,des)" placeholder="내역">
        <button class="col-md-2 input-group-text" v-on:click="createList(amount,des)">저장</button> <!--보낼 값이 늘어나면 매번 파라미터를 늘려야되는가?-->
      </div>
      <div class="jh-content">
      <!--contents-->
      <table border=1>
        <thead>
          <tr>
            <th>번호</th>
            <th>날짜</th>
            <th>범주</th>
            <th>금액</th>
            <th>내용</th>
            <th>변경</th>
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
              <button v-on:click="deleteList(index)">삭제</button>
              <button >수정</button>
            </td>
          </tr>
        </tbody>
      </table>
      </div>

    </div>
  </div>
</body>
</template>

<script>
export default {
  name: 'AccountBook',
  data() {
    return {
      accountLists: [{
        day: '2019.1.27',
        category: '수입',
        amount: '1000',
        description: "월급"
      }, {
        day: '2019.1.28',
        category: '지출',
        amount: '500',
        description: "저녁"
      }, ]
    }
  },
  methods: {
    createList: function(amount, des) {
      this.accountLists.push({
        amount: amount,
        description: des
      });
    },
    deleteList: function(index) {
      this.accountLists.splice(index,1);
    },
    clickBtn(event) {
      console.log('1');
    }
  }

}
</script>

<style scoped> /* scoped를 붙이면 해당하는 컴포넌트에만 style을 적용하는것 */
td {
  padding: 0px 20px;
}
th {
  padding: 0px 20px;
}
.jh-content {
  margin-top:20px;
}

@media (max-width:400px) { /* 브라우저 크기 0~400일때 적용되는 구문 */
  p {
    background-color:blue;
  }
}
@media (min-width:401px) and (max-width:600px){
  p {
    background-color:green;
  }
}
@media (min-width:601px) and (max-width:768px){
  p {
    background-color:red;
  }
}
</style>

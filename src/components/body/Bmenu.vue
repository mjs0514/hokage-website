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

      <div class="navbar fixed-bottom row" style="max-width:800px;">
        <!--부트스트랩을 이용해 고정형 네비바를 만들고 싶을때-->
        <select v-model="category" class="col-md-2 form-control">
          <option disabled value="">항목</option>
          <option value="수입">수입</option>
          <option value="지출">지출</option>
        </select>
        <input class="col-md-4 form-control" type="number" name="amount" v-model="accountLists.amount" v-on:keyup.enter="createList()" placeholder="금액">
        <input class="col-md-4 form-control" type="text" name="description" v-model="accountLists.description" v-on:keyup.enter="createList()" placeholder="내역">
        <button class="col-md-2 input-group-text" v-on:click="createList()">저장</button>
        <!--보낼 값이 늘어나면 매번 파라미터를 늘려야되는가?-->
      </div>
      <div>
        <!--contents-->
        <table class="table" border=1 style="margin-top:300px; max-width:800px; ">
          <thead>            <tr style="background-color:rgb(156, 168, 156)">
              <th scope="col">번호</th>
              <th scope="col">날짜</th>
              <th scope="col">항목</th>
              <th scope="col">금액</th>
              <th scope="col">내용</th>
              <th scope="col">변경</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(account,index) in accountLists" v-bind:style="account.tableColor">
              <td>{{index}}</td>
              <td>{{account.day}}</td>
              <td>{{account.category}}</td>
              <td>{{account.amount}}</td>
              <td>{{account.description}}</td>
              <td>
                <button v-on:click="deleteList(index)">삭제</button>
                <button>수정</button>
              </td>
              <td>
                <input class="input" type="number" name="amount" v-model="amount" v-on:keyup.enter="createList(amount,des)" placeholder="금액">
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
      category: '',
      accountLists: [{
        day: '2019.01.27',
        category: '수입',
        amount: '1000',
        description: "월급",
        tableColor: 'background-color: rgb(70, 169, 232)'
      }, {
        day: '2019.01.28',
        category: '지출',
        amount: '500',
        description: "저녁",
        tableColor: 'background-color:rgb(255, 108, 54)'
      }, ]
    }
  },
  methods: {
    createList: function() {
      var tc = null;
      if (this.category == "수입") {
        tc = 'background-color:rgb(70, 169, 232)'
      } else if (this.category == "지출") {
        tc = 'background-color:rgb(255, 108, 54)'
      } else {
        tc = 'background-color:rgb(255, 255, 255)'
      }
      this.accountLists.push({
        day: this.$moment(new Date()).format('YYYY.MM.DD'),/*특정 포맷으로 현재 날짜 구하기*/
        amount: this.accountLists.amount,
        description: this.accountLists.description,
        category: this.category,
        tableColor: tc
      });
    },

    deleteList: function(index) {
      this.accountLists.splice(index, 1);
    },
    clickBtn(event) {
      console.log('1');
    }
  }

}
</script>


  }
}

@media (min-width:601px) and (max-width:768px) {
  p {
    background-color: red;
  }
}
</style>

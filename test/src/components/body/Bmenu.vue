<template>
<body>
  <div>
    Bmenu 입니다
  </div>

  <div>
    <div>

      <!--타이틀-->
      <p>가계부</p>
      

      <!--통계-->
      <p> 총 합계 : {{totalAmount}} </p>
      <p> 총 수입 : {{totalIncome}} </p>
      <p> 총 지출 : {{totalExpend}} </p>

      <!--입력 폼-->
      <div class="navbar fixed-bottom row" style="max-width:800px;">
        <select v-model="category" class="col-md-2 form-control">
          <option disabled value="">항목</option>
          <option value="수입">수입</option> <!--밸류의 값인 "수입"을 가져오는게 아니라 태그안에 있는 수입을 가져오고 싶으면 어떻게함??-->
          <option value="지출">지출</option>
        </select>
        <input class="col-md-4 form-control" type="number" name="amount" v-model.number="accountLists.amount" v-on:keyup.enter="createList()" placeholder="금액">
        <input class="col-md-4 form-control" type="text" name="description" v-model="accountLists.description" v-on:keyup.enter="createList()" placeholder="내역">
        <button class="col-md-2 input-group-text" v-on:click="createList()">저장</button>
      </div>

        <!--상세내역-->
        <table class="table" border=1 style="margin-top:100px; max-width:800px; ">
          <thead>
            <tr style="background-color:rgb(163, 151, 151)">
              <th scope="col">번호</th>
              <th scope="col">날짜</th>
              <th scope="col">항목</th>
              <th scope="col">금액</th>
              <th scope="col">내용</th>
              <th scope="col">변경</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(account,index) in accountLists" v-bind:style="account.tableColor"> <!--테이블색은 v-bind로 스타일 속성을 변경-->
              <td>{{index}}</td>
              <td>{{account.day}}</td>
              <td>{{account.category}}</td>
              <td>{{account.amount}}</td>
              <td>{{account.description}}</td>
              <td>
                <button v-on:click="deleteList(index)">삭제</button>
                <button>수정</button>
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

  name: 'AccountBook',
  data() {
    return {
      totalAmount: 0,
      totalIncome: 0,
      totalExpend: 0,
      category: '',
      accountLists: [{
        day: '2019.01.27',
        category: '수입',
        amount: 0,
        description: "월급",
        tableColor: 'background-color: rgb(132, 199, 242)'
      }, {
        day: '2019.01.28',
        category: '지출',
        amount: 0,
        description: "저녁",
        tableColor: 'background-color:rgb(255, 130, 15)'
      }, ]
    }
  },
  methods: {
    createList: function() { /* 저장버튼을 누를때 값을 계산하는게 좋은 방법이 아닌것 같음, 삭제할때도 계산을 두번해야되는 단점있음, 저장된 내역을 계산하는게 더 좋은방법같은데 */
      var tablecolor = null;
      if (this.category == "수입") {
        tablecolor = 'background-color:rgb(132, 199, 242)' /*테이블컬러를 변수로 가지고 있는건 좋은 방법 아님*/
        this.totalIncome += this.accountLists.amount;
      } else if (this.category == "지출") {
        tablecolor = 'background-color:rgb(255, 130, 15)'
        this.totalExpend += this.accountLists.amount;
      } else {
        tablecolor = 'background-color:rgb(255, 255, 255)'
      }
      this.accountLists.push({
        day: this.$moment(new Date()).format('YYYY.MM.DD'),
        amount: this.accountLists.amount,
        description: this.accountLists.description,
        category: this.category,
        tableColor: tablecolor
      });
      this.totalAmount = this.totalIncome - this.totalExpend;
    },

    deleteList: function(index) {
      this.accountLists.splice(index, 1);
    }
  }

}
</script>

<style>
@media (min-width:601px) and (max-width:768px) {
  p {
    background-color: red;
  }
}
</style>

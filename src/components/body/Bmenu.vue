<template>
<body>
  <div>
    Bmenu 입니다
  </div>

  <button type="button" class="btn btn-primary" autocomplate="off" data-loading-text="jquery with bootstrap" v-on:click="clickBtn">버튼</button>

  <div>
    <div>
      <!--title-->
      <p>가계부</p>
      <!--input form-->
      <div class="row" >
        <div class="col-md-4">
        <input  type="number" name="amount" v-model="amount" v-on:keyup.enter="createList(amount,des)" placeholder="금액">
        <!--어떻게 위에 폼에서 des변수를 인식할수 있지?? v-model의 스코프가 어디까지 인가? -->
        </div>
        <div class="col-md-4">
        <input class="form-control" type="text" name="description" v-model="des" v-on:keyup.enter="createList(amount,des)" placeholder="내역">
      </div>
        <div class="col-md-4">
        <button class="input-group-text" v-on:click="createList(amount,des)">저장</button> <!--보낼 값이 늘어나면 매번 파라미터를 늘려야되는가?-->
      </div >
      </div>

      <div class="jh-content"> <!--왜 여기에 스타일을 주면 안먹히나? 부트스트랩은 태그에 값주면 안되나?-->
      <!--부트스트랩css보다 나중에 vue 스타일을 로딩할려면 어떻게해야되나? -->
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
          <tr v-for="(account,index) in accountLists"> <!--js에서 태그를 만드는 방식과 비교해서 뭐가 더 좋은가?-->
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

<style>
td {
  padding: 0px 20px;
}
th {
  padding: 0px 20px;
}
.jh-content {
  margin-top:20px;
}
</style>

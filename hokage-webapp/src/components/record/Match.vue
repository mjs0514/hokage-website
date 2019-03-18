<template>
  <div>

  <b-container class="match-container" fluid>
    <b-row class="match-row">
      <b-col>
        <strong> 아이디 : {{this.data[0].user_id}} </strong>
        <strong style="margin-left:50px"> 랭크 : {{this.data[0].rank}} </strong>
      </b-col>
    </b-row>

    <b-row class="match-row match-rank">
      <b-col>
        <b-row>최근 랭크</b-row>
        <b-row>20전 10승 0무 10패 (50%)</b-row>
        <b-row> {{this.data[0].kill}} K / {{this.data[0].death}} D / {{this.data[0].assist}} A </b-row>
        <b-row> ({{(this.data[0].kill+this.data[0].assist)/this.data[0].death}})</b-row>
      </b-col>
      <b-col>
        <b-row>모스트</b-row>
        <b-row>1. 나루토 5승3패</b-row>
        <b-row>2. 사쿠라 2승1패</b-row>
        <b-row>3. 가이아 0승2패</b-row>
      </b-col>
      <b-col>
        포지션
      </b-col>
    </b-row>

    <b-row class="match-row bg-success match-ninja">
      <b-col>
        챔프 요약
      </b-col>
    </b-row>

    <b-row v-for="(match, index) in data" v-bind:class="{'tableColor' : isWin(index)}" class="match-row match-match">
      <b-col>
        {{index}} 경기
      </b-col>
      <b-col>
        {{match.ninja}}
      </b-col>
      <b-col>
        {{match.kill}}/{{match.death}}/{{match.assist}}
      </b-col>
      <b-col>
        {{match.item}} <!-- 아이템 리스트를 보고 이미지를 가져와야함 -->
      </b-col>
      <b-col>
        {{match.result}} <!--경기 결과를 보고 이기면 파란색, 지면 붉은색으로 칠해져야함 -->
      </b-col>
    </b-row>
    
  </b-container>
  </div>
</template>

<script>
export default {
  created () { // created와 computed의 실행 타이밍은?? 차이는?
    console.log(this.$route.query.id);
    this.id = this.$route.query.id;
    let input = {
      id : this.id
    }
    this.$http.post("/service/record/match", input)
    .then((response) => {
      this.data = response.data;
      console.log(this.data[0]);
      console.log(this.data[1]);
    })
  },
  methods : {
    isWin : function(index) {  // v-bind를 통해 특정 값일때 클래스 추가 할수 있음
      if(this.data[index].result == 'win') {
        return true;
      } else {
        return false;
      }
    }
  },
  data () {
    return {
       id: '',
       data: [
         { user_id :'',
           result : '',
           isColor: false }
       ],
       lastRecord: {
         kda : {
           k: 0,
           d: 0,
           a: 0,
         },
         results: {
           w: 0,
           d: 0,
           l: 0,
         }
       }

    }
  }
}
</script>

<style>

.match-container .match-row {
  margin-bottom:10px;
}

.match-rank {
  min-width:400px;
}
.match-ninja {
  height:100px;
}
.match-match {
  height:130px;
  background-color : rgb(240, 161, 161);
}
.match-rank div {
  border-color:red;
  border-style: solid;
  border-width: 2px;
}
.tableColor {
  background-color : rgb(13, 162, 245);
}
</style>

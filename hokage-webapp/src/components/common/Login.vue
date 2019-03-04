<template>
<div>
  <b-card class="login-container" bg-variant="light">
    <p>
      HOKAGE
    </p>
    <b-form v-on:submit="onSubmit">
   <b-form-group>
     <b-form-input v-model="id" type="text" placeholder="아이디" required/>
   </b-form-group>

   <b-form-group>
     <b-form-input v-model="password" type="password" placeholder="비밀번호" required/>
   </b-form-group>

   <div class="text-center">
     <b-button class="login-button text-white" type="submit" variant="warning" block>로그인</b-button>
     <b-link class="text-warning" to="/signup">회원가입</b-link>
   </div>
 </b-form>

  </b-card>
</div>
</template>

<script>
import router from "@/router"
import axios from "axios" // 왜 글로벌하게 안될까?

export default {
  name: "Login",
  data() {
    return {
      id : '',
      password : ''
    }
  },
  methods: {
    onSubmit: function(e) {
      e.preventDefault() // 현재 이벤트의 기본 동작을 중단, 내가 정의한 이벤트만 발생하게하기 위해 사용
      //let id = "123" // var대신 let 쓰면 변수 재선언 불가능
      //let password = "1234" // let 은 block-scope
      let login = () => { // 함수 정의
        let data = {
          id : this.id,
          password : this.password
        }
        axios.post("/service/auth/login", data)
        .then((response) => {
          if(response.data === 'ok'){
            console.log("login ok test")
            console.log(response)
            console.log(response.data) //
            router.push("/")
          } else if (response.data === 'no'){
            console.log("login no test")
          } else{
            console.log("login else test")
            console.log(response) //응답의 내용 확인
          }
        })
        .catch((errors) => {
          console.log("login fail")
          console.log(errors)
        })
      }
      login() // 함수 호출
    }
  }
}
</script>


<style>
.login-container p {text-align: center; color:orange; font-size:30px;}
.login-container {width: 400px; margin-top: 100px;
   position:relative; left:50%; transform:translateX(-50%);}

</style>

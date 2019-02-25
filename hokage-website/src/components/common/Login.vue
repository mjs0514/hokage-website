<template>
<div>
  <b-card class="login-container" bg-variant="light">
    <p>
      HOKAGE
    </p>
    <b-form @submit="onSubmit">
   <b-form-group>
     <b-form-input v-model="username" type="text" placeholder="아이디" required/>
   </b-form-group>

   <b-form-group :invalid-feedback="invalidFeedback">
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
export default {
}
</script>


<style>
.login-container p {text-align: center; color:orange; font-size:30px;}
.login-container {width: 400px; margin-top: 100px;
   position:relative; left:50%; transform:translateX(-50%);}

</style>

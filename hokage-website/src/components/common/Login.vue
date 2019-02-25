<template>
<div>
  <b-card class="login-container" bg-variant="light">
    <p>
      HOKAGE 로그인
    </p>
    <b-form @submit="onSubmit">
   <b-form-group>
     <b-form-input v-model="username" type="text" placeholder="아이디" required/>
   </b-form-group>

   <b-form-group :invalid-feedback="invalidFeedback">
     <b-form-input v-model="password" type="password" placeholder="비밀번호" required/>
   </b-form-group>

   <div class="text-center">
     <b-button type="submit" variant="primary" block>로그인</b-button>
     <b-button variant="link" @click="$emit('swap-form')">회원가입</b-button>
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
.login-container p {text-align: center; }
.login-container {width: 400px; margin-top: 100px;
   position:relative; left:50%; transform:translateX(-50%);}
</style>

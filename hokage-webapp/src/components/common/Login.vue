<template>
<div>
  <b-card class="login-container" bg-variant="light">
    <p>
      HOKAGE
    </p>
    <b-form v-on:submit="onSubmit">
      <b-form-group>
        <b-form-input v-model="id" type="text" placeholder="아이디" required />
      </b-form-group>
      <b-form-group>
        <b-form-input v-model="pw" type="password" placeholder="비밀번호" required />
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
import EventBus from '@/utils/event-bus'
export default {
  name: "Login",
  data() {
    return {
      id: '',
      pw: '',
    }
  },
  methods: {
    onSubmit: function(e) {
      e.preventDefault() // 현재 이벤트의 기본 동작을 중단, 내가 정의한 이벤트만 발생하게하기 위해 사용

      let input = {
        id: this.id,
        pw: this.pw,
      }

      this.$http.post('/service/auth/login', input)
        .then((res) => {
          if (res.data.success) {
            sessionStorage.setItem('logout', false);
            sessionStorage.setItem('authToken', res.data.authToken);
            EventBus.$emit('login-event');
            this.$router.push('/');
          } else {
            alert('아이디 또는 비밀번호가 올바르지 않습니다.');
          }
        })
        .catch((error) => {
          console.log(error);
          console.log(error.response);
        })
    }
  }
}
</script>
<style>
.login-container p {
  text-align: center;
  color: orange;
  font-size: 30px;
}

.login-container {
  width: 400px;
  margin-top: 100px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
</style>

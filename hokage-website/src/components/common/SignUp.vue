<template>
<div>
  <b-card class="signup-container" bg-variant="light">
    <p>
      HOKAGE
    </p>

      <b-form-group :invalid-feedback="invalidIdFeedback" :valid-feedback="validIdFeedback" >
        <b-form-input  v-model="id" :state="idState" type="text" trim placeholder="아이디" required />
      </b-form-group>

      <b-form-group :invalid-feedback="invalidPWFeedback" :valid-feedback="validPWFeedback">
        <b-form-input v-model="password" :state="pwState" type="password" placeholder="비밀번호" required />
      </b-form-group>

      <b-form-group >
        <b-form-input  type="email" placeholder="이메일" required />
      </b-form-group>
      <b-form-group >
        <b-form-input  type="text" placeholder="지역" required />
      </b-form-group>

      <b-container >
        <b-form-row>
          <b-col>
            <b-button class="text-white" to="/login" variant="warning" block>취소</b-button>
          </b-col>
          <b-col>
            <b-button class="text-white" type="submit" variant="warning" block>가입</b-button>
          </b-col>
        </b-form-row>
      </b-container>


  </b-card>
</div>
</template>

<script>
export default {
  computed: {
    idState() {
        return this.id.length > 2 ? true : false
      },
    pwState() {
          return this.password.length > 3 ? true : false
      },
    invalidIdFeedback() {
          if (this.id.length > 2) {
            return ''
          } else if (this.id.length > 0) {
            return 'Enter ID at least 3 characters'
          } else {
            return 'Please enter something ID'
          }
        },        
    validIdFeedback() {
        return this.idState === true ? 'Thank you' : ''
      },
      invalidPWFeedback() {
            if (this.password.length > 3) {
              return ''
            } else if (this.password.length > 0) {
              return 'Enter Password at least 4 characters'
            } else {
              return 'Please enter something Password'
            }
          },
      validPWFeedback() {
          return this.pwState === true ? 'Thank you' : ''
        },
    },
    data() {
      return { // return을 한 이유는?
        id: '',
        password: ''
      }
    }


  // computed: {
  //     state() {
  //       return this.name.length >= 4 ? true : false
  //     },
  //     invalidFeedback() {
  //       if (this.name.length > 4) {
  //         return ''
  //       } else if (this.name.length > 0) {
  //         return 'Enter at least 4 characters'
  //       } else {
  //         return 'Please enter something'
  //       }
  //     },
  //     validFeedback() {
  //       return this.state === true ? 'Thank you' : ''
  //     }
  //   },
  //   data() {
  //     return {
  //       name: ''
  //     }
  //   }

}
</script>


<style>
.signup-container p {text-align: center; color:orange; font-size:30px;}
.signup-container {width: 400px; margin-top: 100px;
   position:relative; left:50%; transform:translateX(-50%);}
</style>

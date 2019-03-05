<template>
<div>
  <b-card class="signup-container" bg-variant="light">
    <p>
      HOKAGE
    </p>
    <b-form @submit="onSubmit">
      <b-form-group :invalid-feedback="invalidIdFeedback" :valid-feedback="validIdFeedback" >
        <b-form-input  v-model="form.id" :state="idState" type="text" trim placeholder="아이디" required />
      </b-form-group>

      <b-form-group :invalid-feedback="invalidPWFeedback" :valid-feedback="validPWFeedback">
        <b-form-input v-model="form.password" :state="pwState" type="password" placeholder="비밀번호" required />
      </b-form-group>

      <b-form-group>
        <b-form-input v-model="form.email" type="email" placeholder="이메일" required aria-describedby="emailHelpBlock" />
        <b-form-text id="emailHelpBlock">
          이메일로 공지사항,이벤트 정보를 받을 수 있습니다.
        </b-form-text>
      </b-form-group>

      <b-form-group>
        <b-form-select v-model="form.selected" :options="resiOptions" class="mb-3" required aria-describedby="residenceHelpBlock">
          <template slot="first">
            <option :value="null" disabled>거주 지역</option>
          </template>
        </b-form-select>
        <b-form-text id="residenceHelpBlock">
          거주 지역은 클랜을 가입할 때 추천 정보로 사용됩니다.
        </b-form-text>
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
</b-form>

  </b-card>
</div>
</template>

<script>
export default {
  computed: {
    idState() {
        return (this.form.id.length > 3)&&(this.form.id.length < 21) ? true : false
      },
    pwState() {
          return (this.form.password.length > 7)&&(this.form.password.length < 21) ? true : false
      },
    invalidIdFeedback() {
          if (this.form.id.length === 0) {
            return '아이디를 입력하세요'
          } else if (this.form.id.length > 0) {
            return '아이디는 반드시 4~20글자 이내여야합니다'
          } else if ((this.form.id.length > 3)&&(this.form.id.length < 21)) {
            return ''
          } else if (this.form.id.length > 20) {
            return '아이디는 반드시 4~20글자 이내여야합니다'
          }
        },
    validIdFeedback() {
        return this.idState === true ? '감사합니다' : ''
      },
      invalidPWFeedback() {
            if (this.form.password.length === 0) {
              return '비밀번호를 입력하세요'
            } else if (this.form.password.length > 0) {
              return '비밀번호는 반드시 8~20글자 이내여야합니다'
            } else if ((this.form.password.length > 7)&&(this.form.password.length < 21)) {
              return ''
            } else if (this.form.password.length > 20) {
              return '비밀번호는 반드시 8~20글자 이내여야합니다'
            }
          },
      validPWFeedback() {
          return this.pwState === true ? '감사합니다' : ''
        },
    },
    data() {
      return {
        form : {
          id: '',
          password: '',
          email: '',
          selected: null,
        },
        resiOptions: [
        { value: '서울', text: '서울' },
        { value: '인천', text: '인천' },
        { value: '대전', text: '대전' },
        { value: '대구', text: '대구' },
        { value: '광주', text: '광주' },
        { value: '울산', text: '울산' },
        { value: '부산', text: '부산' },
        { value: '경기', text: '경기도' },
        { value: '강원', text: '강원도' },
        { value: '충청', text: '충청도' },
        { value: '전라', text: '전라도' },
        { value: '경상', text: '경상도' },
        { value: '제주', text: '제주도' }
        ]
      }
    },
    methods: {
    onSubmit : function(e) {
        e.preventDefault()
        let join = () => { // 함수 정의
          let input = {
            id : this.form.id,
            pw : this.form.password,
            email : this.form.email,
            region : this.form.selected
          }
          this.$http.post("/service/userInfo", input)
          .then((response) => {
            if(response.data == 'success'){
              alert('회원가입이 성공적으로 완료되었습니다');
              this.$router.push("/login");
            }
            else if (response.data == 'error'){
              alert(this.form.selected);
            }
            else {
              alert('이미 동일한 아이디가 존재합니다');
            }
          })
          .catch((errors) => {
            console.log(errors)
          })
        }
        join() // 함수 호출
      }
    }
}
</script>


<style>
.signup-container p {text-align: center; color:orange; font-size:30px;}
.signup-container {width: 400px; margin-top: 100px;
   position:relative; left:50%; transform:translateX(-50%);}
#residenceHelpBlock {margin-top:-12px;}
</style>

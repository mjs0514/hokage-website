<template>
<div>
  <v-app>
    <v-container fluid>
      <p>Vuetify 사용법 (레이아웃 구조)</p>
      <p>Vuetify 커스터마이징(자유도)</p>
      <p>Vuetify & 부트스트랩</p>
      <v-layout>
        <v-flex>
          <v-btn class="test col-md-4">나는</v-btn>
          <v-btn class="test col-md-4">나비</v-btn>
        </v-flex>
      </v-layout>
      <v-flex xs12 s12 md12 ma-5>
        <v-card>
          v-flex 테스트
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md4>
        <v-text-field label="Solo" placeholder="Placeholder" solo></v-text-field>
        <p><a href="https://vuetifyjs.com/en/framework/spacing">
          vuetify 패딩, 마진
        </a></p>
        <p><a href="https://v1.vuetifyjs.com/ko/components/buttons">
          vuetify 셀렉트박스
        </a></p>
      </v-flex>
      <v-flex>
        <v-btn xs12>테스트</v-btn>
      </v-flex>
      <div class="blue darken-4 text-xs-center">
        <span class="white--text">Lorem ipsum</span>
      </div>
    </v-container>
  </v-app>
</div>
</template>

<style>
.test {
  /* width: 150px;
  height: 150px; */
}

.test .v-btn__content {
  color: blue;
}

.blue {
  /* width: 150px; */
}

@media (min-width:601px) and (max-width:768px) {
  p {
    background-color: red;
  }
}
</style>

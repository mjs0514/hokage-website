<template>
<div>
  <v-app id="inspire">
    <v-container fluid>
      <v-layout row wrap align-center>
        <v-flex>
          <div class="text-xs-center">
            <p><a href="https://vuetifyjs.com/ko/components/api-explorer" target="_blank">Vuetify 공식 문서</a></p>
            <div>
              <v-btn small color="red" small class="test col-md-4">Small Button</v-btn>
              <v-btn color="black" class="blue--text col-md-4">Normal Button</v-btn>
            </div>
            <div>
              <v-btn color="primary" fab small dark>
                <v-icon>edit</v-icon>
              </v-btn>
            </div>
          </div>
        </v-flex>
        <!-- <v-flex xs12 sm6>
          <div class="text-xs-center">
            <div>
              <v-btn color="primary" fab small dark>
                <v-icon>edit</v-icon>
              </v-btn>
            </div>
            <div>
              <v-btn color="warning" fab dark>
                <v-icon>account_circle</v-icon>
              </v-btn>
            </div>
            <div>
              <v-btn color="error" fab large dark>
                <v-icon>alarm</v-icon>
              </v-btn>
            </div>
          </div>
        </v-flex> -->
      </v-layout>
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
</style>

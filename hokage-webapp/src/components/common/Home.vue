<template>
  <div>

    <div class="first-container">
      <div class="first-image">
        <img
          src="@/assets/image.jpg"
          alt="Home image">
      </div>

      <b-form v-on:submit="onSubmit" class="first-input input-group">
        <b-form-input type="text" v-model="id" placeholder="아이디를 입력하세요"></b-form-input>
        <div class="input-group-append">
          <b-button class="btn-warning" type="submit">검색</b-button>
        </div>
      </b-form>
    </div>


<b-container class="second-container">
  <b-row class="row-0">
    <b-col class="col-0" cols="4">
      <p>공지사항</p>
    </b-col>
    <b-col class="col-1" cols="4">
      <p>업데이트</p>
    </b-col>
    <b-col class="col-2"cols="4">
      <p>인기글</p>
    </b-col>
  </b-row>
</b-container>

    <b-carousel
          id="carousel1"
          style="text-shadow: 1px 1px 2px #333;"
          controls
          indicators
          background="#ababab"
          :interval="4000"
          img-width="1024"
          img-height="480"
          v-model="slide"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <!-- Text slides with image -->
          <b-carousel-slide
            caption="First slide"
            text="Nulla vitae elit libero, a pharetra augue mollis interdum."
            img-src="https://picsum.photos/1024/480/?image=52"
          />

          <!-- Slides with custom text -->
          <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
            <h1>Hello world!</h1>
          </b-carousel-slide>

          <!-- Slides with image only -->
          <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58" />

          <!-- Slides with img slot -->
          <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
          <b-carousel-slide>
            <img
              slot="img"
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src="https://picsum.photos/1024/480/?image=55"
              alt="image slot"
            />
          </b-carousel-slide>

          <!-- Slide with blank fluid image to maintain slide aspect ratio -->
          <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
              a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
            </p>
          </b-carousel-slide>
        </b-carousel>

        <p class="mt-4">
          Slide #: {{ slide }}<br />
          Sliding: {{ sliding }}
        </p>
  </div>
</template>

<script>
export default {
  data() {
      return {
        id: '',
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      },
      onSubmit(e) {
        let input = {
          id : this.id
        }
        e.preventDefault();

        // db검색후에 라우팅하는것보다 라우팅 후에 match.vue에서 db검색하는게 더 좋을듯
        this.$router.push(`/match?id=${this.id}`);

        // this.$http.post("/service/record/match", input)
        // .then((response) => {
        //   console.log(response);
        //   // 1. 파라미터 방식의 문제점, 새로고침하면 데이터가 유지안됨, 방법을 찾을라면 할수있을듯
        //   //this.$router.push({ name:'Match', params: {'data':response.data} });
        //
        //   // 2. 쿼리 방식
        //   this.$router.push(`/match?id=${response.data[0].match_id}`);
        // })
      }
    }
}
</script>


<style>
.first-image img {width:100%; opacity: 0.7; }
.first-container {position:relative;}
.first-input {position: absolute; top:80%; left:50%; transform:translate(-50%,-50%); width:400px}

.second-container .row-0 { margin-bottom: 100px; border: 2px solid blue;}
.second-container .col-0 { border: 2px solid red;}
.second-container .col-1 { border: 2px solid red;}
.second-container .col-2 { border: 2px solid red;}
</style>

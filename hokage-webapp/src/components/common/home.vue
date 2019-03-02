<template>
  <div>

    <div class="first-container">
      <div class="first-image">
        <img
          src="@/assets/image.jpg"
          alt="Home image">
      </div>
      <div class="first-input form-group">
        <input
         type="id" class="form-control"
         placeholder="아이디를 입력하세요">
        </input>
      </div>
    </div>

<!-- <div class="second-container">
  <span> 공지사항 </span>
  <b-card
    title="Card Title"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </b-card-text>

    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
  <span> 인기글 </span>
</div> -->

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

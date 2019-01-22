<template>
  <footer>
    <div class="wrap">
      <ul class="link">
        <li class="link-item" v-for="item in link" :key="item.id" v-on:click="clickLink(item)">
          {{item.name}}
        </li>
      </ul>
      <div class="copyrights">© 2019-xxxx going.gg test</div>
      <ul class="sns">
        <li class="sns-item-twitter">
          <a href="http://twitter.com/globalopgg/" target="_blank"><i>Twitter</i></a>
        </li>
        <li class="sns-item-instagram">
          <a href="https://www.instagram.com/opgginc/" target="_blank"><i>Instagram</i></a>
        </li>
        <li class="sns-item-facebook">
          <a href="https://www.facebook.com/lolopgg/" target="_blank"><i>Facebook</i></a>
        </li>
      </ul>
    </div>
  </footer>
</template>
<script>
import EventBus from '@/utils/event-bus'

export default{
  name:"footerbar",
  data () {
    return {
      link : [{
        id: 'about',
        name: 'About',
        path: '/A/A0'
      },{
        id: 'test',
        name: 'Test',
        path: '/B/B1'
      }]
    }
  },
  methods: {
    clickLink : function(item) {
      EventBus.$emit('routeTo', item.id);
      this.$router.push({ path : item.path});
    }
  }
}
</script>
<style>
footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%
}
li {
  margin: 0;
  padding: 0;
}
.wrap {
  width: 1080px;
  margin: 0 auto;
  padding: 40px 0;
}

.link {
  line-height: 15px;
  font-size: 12px;
  list-style: none;
  padding: 0;
  max-width: 1300px;
}

.link-item {
  width: 100px;
  text-align: center;
  display: inline-block;
  margin-left: 20px;
}

.link-item:first-child {
  margin-left: 0;
}

.link-item > a {
  display: block;
  color: inherit;
  text-decoration: none;
}
.copyrights {
  margin-top: 10px;
  line-height: 14px;
  font-size: 12px;
  font-weight: bold;
}

.sns {
  margin-top: -16px;
  line-height: 16px;
  text-align: right;
  font-size: 0;
}
.sns li {
  display: inline-block;
  margin-left: 10px;
}

.sns-item-twitter i {
  width: 16px;
  height: 16px;
  display: block;
  background: url('../../assets/images/twitter.svg') no-repeat;
  background-size: contain;
}

.sns-item-instagram i {
  width: 16px;
  height: 16px;
  display: block;
  background: url('../../assets/images/instagram.svg') no-repeat;
  background-size: contain;
}

.sns-item-facebook i {
  width: 16px;
  height: 16px;
  display: block;
  background: url('../../assets/images/Facebook.svg') no-repeat;
  background-size: contain;
}
</style>

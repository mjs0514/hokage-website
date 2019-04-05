<template>
<div>
  <b-navbar toggleable="md" type="dark" variant="dark" fixed="top">
    <b-navbar-brand style="color:orange" href="/">HOKEGE</b-navbar-brand>
    <b-navbar-toggle target="nav_collapse" />

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav class="mr-auto">

        <b-nav-item class="dropdown">새소식
          <div class="dropdown-menu">
            <b-link to="/notice">공지사항</b-link>
            <b-link to="/update">업데이트</b-link>
            <b-link to="/event">이벤트</b-link>
          </div>
        </b-nav-item>

        <b-nav-item class="dropdown">가이드
          <div class="dropdown-menu">
            <b-link to="/guide">게임소개</b-link>
            <b-link v-on:click="route('guide')">아이템정보</b-link>
            <b-link to="/">맵정보</b-link>
          </div>
        </b-nav-item>

        <b-nav-item class="dropdown">자료실
          <div class="dropdown-menu">
          </div>
        </b-nav-item>

        <b-nav-item class="dropdown">기록실
          <div class="dropdown-menu">
          </div>
        </b-nav-item>

        <b-nav-item class="dropdown">커뮤니티
          <div class="dropdown-menu">
          </div>
        </b-nav-item>

        <b-nav-item class="dropdown" disabled>분석실
          <div class="dropdown-menu">
          </div>
        </b-nav-item>

      </b-navbar-nav>

      <b-button variant="outline-success" @click="toggle">{{ logout ? '로그인' : '로그아웃' }}</b-button>

    </b-collapse>
  </b-navbar>

</div>
</template>

<script>
import EventBus from '@/utils/event-bus'
export default {
  name: 'TopMenu',
  data() {
    return {
      logout: JSON.parse(sessionStorage.getItem('logout'))
    }
  },
  beforeCreate: function() {
    let checked = sessionStorage.getItem('logout');
    if (checked == null) {
      sessionStorage.setItem('logout', true)
      this.logout = true;
    }
  },
  created: function() {
    EventBus.$on("login-event", logined => {
      this.logout = false;
    });
  },
  methods: {
    toggle() {
      if (this.logout == true) {
        this.$router.push("/login");
      } else {
        this.logout = !this.logout;
        sessionStorage.setItem('logout', this.logout);
        alert('로그아웃');
      }
    },
    route(input) {
      if (this.logout == true) {
        this.$router.push("/login");
      } else {
        this.$router.push("/" + input);
      }
    }
  }
}
</script>

<style>
.dropdown:hover .dropdown-menu {
  display: block;
}

.dropdown-menu {
  display: none;
  position: absolute;
  background-color: rgb(42, 37, 37, 0.5);
  min-width: 120px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  margin-top: 0px;

}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-menu a {
  color: rgb(248, 239, 254);
  padding: 5px 10px;
  text-decoration: none;
  display: block;

}

.dropdown-menu a:hover {
  color: orange;
}
</style>

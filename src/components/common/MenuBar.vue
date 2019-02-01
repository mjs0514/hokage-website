<template>
  <nav>
    <div id="gnb_area">
      <router-link id="logo" to="/">
        <img src="http://placehold.it/300x76" v-on:click="clickLogo" />
      </router-link>
      <ul class="menu">
        <li class="gnb-menu" v-for="item in menu" :key="item.id" v-on:click="clickMenu(item)">
          {{ item.name }}
        </li>
      </ul>
    </div>

    <div id="lnb_area" v-show="isSelect" >
      <ul class="menu">
        <li class="lnb-menu" v-for="item in selectedMenu.children">
          <router-link :to="{name:'lnb', params:{lnbMenu:item.id}}">{{item.name}}</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import EventBus from '@/utils/event-bus'

export default {
  name: 'menubar',
  methods: {
    clickLogo: function() {
      this.selectedMenu = this.menu[0];
      this.isSelect = true;
    },
    clickMenu: function(menuItem) {
      this.selectedMenu = menuItem;
      this.isSelect = true;
      this.$router.push({
        name: 'gnb',
        params: {
          gnbMenu: menuItem.id
        }
      });
    }
  },
  created: function() {
    this.selectedMenu = this.menu[0];
    this.isSelect = true;


    EventBus.$on('routeTo', id => { //arrow function을 사용해서 해결
      if(id === 'about'){
        this.selectedMenu = this.menu[0];
      } else if (id === 'test') {
        this.selectedMenu = this.menu[1];
      } else {
        console.log('error');
      }
      // var index = this.menu.findIndex(function(item){
      //   return item.id == id;
      // });

      //this.selectedMenu = this.menu[index];
    });
  },
  data () {
    return {
      selectedMenu: '',
      isSelect: false,
      menu: [{
        id: 'A',
        name: 'A',
        children: [{
          id: 'A0',
          name: 'toast'
        }, {
          id: 'A1',
          name: 'iframe editor'
        }, {
          id: 'A2',
          name: 'ace'
        }, {
          id: 'A3',
          name: 'codemirror'
        }]
      }, {
        id: 'B',
        name: 'B',
        children: [{
          id: 'B0',
          name: 'B-0'
        }, {
          id: 'B1',
          name: 'B-1'
        }]
      }, {
        id: 'C',
        name: 'C',
        children: [{
          id: 'C0',
          name: 'C-0'
        }, {
          id: 'C1',
          name: 'C-1'
        }]
      }, {
        id: 'D',
        name: 'D',
        children: [{
          id: 'D0',
          name: 'D-0'
        }, {
          id: 'D1',
          name: 'D-1'
        }]
      }]
    }
  }
}
</script>

<style>
#logo {
  float: left;
}
#gnb_area {
  height: 82px;
}
#lnb_area {
  clear: both;
  background: #1d2e51;
  height: 44px;
}

.menu {
  list-style: none;
  padding: 0;
  max-width: 1300px;
}

.gnb-menu, .lnb-menu {
  float: left;
  width: 150px;
  text-align: center;
}

.gnb-menu {
  cursor: pointer;
  font-size: 40px;
  padding-top: 20px;
}

/* lnb-menu default font color */
.lnb-menu > a {
  color : #73a1cb;
  text-decoration: none;
  font-size: 20px;
  border-bottom: 3px solid transparent;
  line-height: 2;
}

/* 선택된 메뉴 or hover시 css */
.lnb-menu > .router-link-exact-active , .lnb-menu > a:hover {
  color: #fff;
  border-bottom-color: #fff;
}
</style>

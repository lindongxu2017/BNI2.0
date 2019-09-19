<template>
  <div id="app">
    <keep-alive include="index,activity,center">
      <router-view />
    </keep-alive>
    <!-- <van-tabbar route v-model="active" v-show="is_show_tab" active-color="#7C384F">
            <van-tabbar-item v-for="(item, index) in tabbar_list" :key="index" replace :to="item.path" :icon="item.icon">
                {{item.name}}
            </van-tabbar-item>
    </van-tabbar>-->
    <van-tabbar route v-model="active" v-show="is_show_tab" active-color="#7C384F">
      <van-tabbar-item v-for="(item, index) in tabbar_list" :key="index" replace :to="item.path">
        <span>{{item.name}}</span>
        <img slot="icon" slot-scope="props" :src="props.active ? item.active : item.normal" />
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      active: 0,
      tabbar_list: [
        { path: "/", name: "首页", icon: "home-o",normal: require("@/assets/L-index.png"),active:require("@/assets/L-index_select.png" )},
        { path: "/activity", name: "会议活动", icon: "home-o",normal:require("@/assets/L-activity.png"),active:require("@/assets/L-activity_select.png")},
        { path: "/center", name: "我的", icon: "friends-o",normal:require("@/assets/L-my.png"),active:require("@/assets/L-my_select.png") }
      ],
      is_show_tab: false
    };
  },
  watch: {
    $route: function() {
      this.showTabbar();
    }
  },
  mounted() {
    this.showTabbar();
  },
  methods: {
    showTabbar() {
      var route_path = this.$route.path;
      var bool = this.tabbar_list.some((item, index) => {
        return item.path == route_path;
      });
      this.is_show_tab = bool;
    }
  }
};
</script>

<style>
html,
body {
  background-color: #f7f7f7;
}
* {
  margin: 0;
  padding: 0;
  appearance: none;
}
img {
  content: normal !important;
}
.van-button--primary {
  background-color: #7c384f;
  border-color: #7c384f;
}
</style>

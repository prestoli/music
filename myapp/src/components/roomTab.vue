<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="我的" name="first">我的</el-tab-pane>
    <el-tab-pane label="搜索" name="third">搜索</el-tab-pane>
    <el-tab-pane label="发现" name="fourth">发现</el-tab-pane>
    <el-tab-pane label="推荐" name="five">推荐</el-tab-pane>
  </el-tabs>
</template>

<script>
import jQuery from "../assets/js/jquery.min"
window.jQuery = window.$ = $;
export default {
  name: 'roomTab',
  data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}

body{
  height: 100vh;
  background: url("../assets/音乐-1.png") no-repeat;
  background-size: 100% 100%;
}
@import "https://unpkg.com/element-ui/lib/theme-default/index.css";
element.style{
  width: 76px!important;
}
/*.el-tabs__nav{
  width: 100%;
}*/
.el-tabs__nav-wrap{
  background: #e45655;
}
.el-tabs__active-bar{
  background: #fff!important;
}
.el-tabs__item.is-active{
  color:#fff!important;
}
/*.el-tabs__item{
  padding:0 24px!important;
}*/
</style>

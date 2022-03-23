<template>
  <div id="app">
    <van-tabbar route active-color="#c35559" v-if="isShow">
      <van-tabbar-item replace to="/home" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/topic" icon="label-o">专题</van-tabbar-item>
      <van-tabbar-item replace to="/category" icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item replace to="/cart" icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item replace to="/mine" icon="user-circle-o">我的</van-tabbar-item>
    </van-tabbar>
    <router-view/>
  </div>
</template>
<script>
export default {
  data() {
    return {
     isShow:true,
    };
  },
 watch: {
   $route(to, from) {
      // 对路由变化作出响应...
      var arr = ["/home","/topic","/category","/cart","/mine"];
      if(arr.includes(to.path)){
        this.isShow = true;
      }else{
        this.isShow = false;
      }
    }
  },
  methods:{
  init(){
     var userInfo = {
      "openId":"66",
      "nickName":"尼古拉斯--余涛涛",
      "avatarUrl":"https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIbWFEIJj8IpGeHM7dGic1aTFZALjWcMm9ltWfFiaQfVRYticWBfgGfzXWMt2EkJWiaicPtftHAlWxUibxQ/132"
    };
var openId = userInfo.openId;
localStorage.setItem("userInfo", JSON.stringify(userInfo));
localStorage.setItem("openId", openId);
  }
  },
created(){
    this.init()
  },

}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

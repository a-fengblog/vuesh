<template>
  <div class="prolist">
    <div class="head">
      <span @click="comeback"><van-icon name="arrow-left" /> 返回</span>
      <span> 乐居</span>
    </div>
    <div class="nav" >
      <van-tabs v-model="active"   @click="comeId">
     <van-tab v-for="item in navlist"  :name="item.name"  :title="item.name"
      :key="item.id"  >
     </van-tab>
    </van-tabs>
    </div>
    <div class="banner">
      <p>{{active}}</p>
     <p>{{desc}}</p>
    </div>
    <ul class="prolist">
        <li v-for="item in prolist" :key="item.id" @click="shopping(val)">
          <img :src="item.list_pic_url" alt="">
          <p>{{item.name}}</p>
          <p>￥{{item.retail_price}}</p>
        </li>
      </ul>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import {  categoryNav,categoryGoodsList} from "@/api/category/prolist/index.js";
export default {
  data() {
    return {
        navlist:{},
        prolist:{},
        active:"",
        goodId:"",
        navname:"",
        desc:"",
    };
  },
  methods: {
  init(){
console.log(this.$route.query);
  categoryNav({
       id:this.$route.query.id
   }).then(res=>{
       console.log("nav",res);
      this.active =res.currentNav.name,
       this.navlist = res.navData
   })
  categoryGoodsList({
       categoryId:this.$route.query.id
   }).then(res=>{
     console.log("内容区",res);
     this.desc =res.currentNav.front_desc
      this.prolist =res.data
   })
      },

    comeback(){
     this.$router.go(-1)
    },
  comeId(val){
    //根据名字搜索ID
    var id =this.navlist.find(el=>el.name == val).id
         categoryGoodsList({
       categoryId:id
        }).then(res=>{
       console.log("玩具",res);
        this.prolist =  res.data
        this.desc =res.currentNav.front_desc
   })
  },
    shopping(val){
         this.$router.push(`/content?id=${val}`)
    }
  },
  computed: {

  },
  created(){
  this.init()
  },
};
</script>

<style lang="scss" scoped>
@import "./scss/index.scss";
</style>
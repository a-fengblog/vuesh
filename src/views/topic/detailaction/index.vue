<template>
    <div>
 <div class="head">
      <span @click="comeback"><van-icon name="arrow-left" /> 返回</span> <span> 乐居</span>
    </div>
    <div class="banner" v-html="imglist.content">
    </div>
      <!-- 专题推荐 -->
    <div class="list">
      <div class="title">专题推荐</div>
      <div class="item" v-for="item in list" :key="item.id">
        <img :src="item.scene_pic_url" alt="" />
        <p>{{ item.title }}</p>
      </div>
    </div>
    </div>
</template>

<script>
import {
    detailaction
} from "@/api/topic/detailaction"
export default {
    data() {
        return {
     list:{},
     imglist:{},
        };
    },
    methods: {
   init(){
       detailaction({
           id : this.$route.query.id
       }).then(res=>{
       console.log(res);
       this.imglist =res.data
       this.list =res.recommendList
       })
   },
   comeback(){
        this.$router.go(-1)
   }
    },
    computed: {

    },
    created() {
        this.init()
    },
    mounted() {

    },
};
</script>

<style scoped lang="scss">
.head {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 66;
   text-align: start;
   width: 100%;
   background-color: rgb(255, 255, 255);
   height: 30px;
   line-height: 20px;
   padding: 8px;
   span:nth-child(1) {
     display: inline-block;
     width: 48%;
     color: #2f8bfa;
   }
   span:nth-child(2) {
     color: #323233;
     font-weight: 500;
     font-size: 16px;
   }
 }
 ::v-deep .banner {
     display: block;
     width: 100%;
     img{
          display: block;
     width: 100%; 
     }
 }
 .list {
  width: 345px;
  height: auto;
  margin: 0 15px;
  .title {
    text-align: center;
    background: #f4f4f4;
    font-size: 15px;
    color: #999;
    padding: 15px 0;
  }
  .item {
    width: 100%;
    padding: 12px 12px 15px 12px;
    margin-bottom: 15px;
    background-color: #fff;
    box-sizing: border-box;
    img { 
        display: block;

      height: 139px;
      width: 100%;
     
    }
  }
  }
</style>

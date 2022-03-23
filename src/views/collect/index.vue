<template>
    <div>
         <div class="head">
      <span @click="comeback"><van-icon name="arrow-left" /> 返回</span> <span> 乐居</span>
    </div>
    <div class="title">我的收藏</div>
<ul class="goodslist">
        <li v-for="item in goodsList" :key="item.id" @click="shopping(item.id)">
          <img :src="item.list_pic_url" alt="">
          <p>{{item.name}}</p>
          <p>￥{{item.retail_price}}</p>
        </li>
      </ul>
    </div>
</template>

<script>
import { listAction } from "@/api/collect/index.js";
export default {
    data() {
        return {
     goodsList:{},
        };
    },
    methods: {
    init(){
        listAction({
            openId:localStorage.getItem("openId")
        }).then(res=>{
            console.log(res);
            this.goodsList=res.collectGoodsList
        })
    },
    comeback(){
        this.$router.go("-1")
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
.goodslist{
     padding: 0;
     li{
         box-sizing: border-box;
         width: 50%;
         border-bottom:0.5px solid #d9d9d9 ;
         border-right:1Px solid #d9d9d9 ;
         img{
            display: block;
            width: 151px;
            height: 151px;
            margin: 0 auto;
         }
         p{
      text-align: center;
         }
         :nth-child(3){
              color: #b4282d;
             font-size: 16px;
         }
     }
     display: flex;
     flex-wrap: wrap;
    
 }
 .head {
    position: fixed;
    top:0;
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
 .title{
     margin-top: 38px;
     padding: 10.0001px 0;
    text-align: center;
    background: #fff;
    margin-bottom: 2.5001px;
    font-size: 18px;
    font-weight: 700;
 }
</style>

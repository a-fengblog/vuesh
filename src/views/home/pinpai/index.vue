<template>
  <div>
<div class="head">
      <span @click="comeback"><van-icon name="arrow-left" /> 返回</span> <span> 乐居</span>
    </div>
    <div class="banner">
        <img :src="insec.pic_url" alt="">
        <p>{{insec.name}}</p>
    </div>
      <div class="desc">{{insec.simple_desc}}</div>
    <ul class="goodslist">
        <li v-for="item in goodsList" :key="item.id">
          <img :src="item.list_pic_url" alt="">
          <p>{{item.name}}</p>
          <p>￥{{item.retail_price}}</p>
        </li>
      </ul>
  </div>
</template>

<script>
import { detailaction } from "@/api/home/pinpai";
export default {
data() {
    return {
        property: 'value',
        insec:"",
        goodsList:"",

    };
},
methods:{
init (){
    console.log(this.$route.query.id);
detailaction({
    id:this.$route.query.id
}).then(res=>{
    console.log("值",res);
    this.insec=res.data
    this.goodsList =res.goodsList
})
},
comeback(){
    this.$router.push(`/home`)
 },
},
computed:{

},
created(){
this.init()
}
}
</script>

<style lang="scss" scoped>
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
  .banner{
      padding-top: 30px ;
     position: relative;
     width: 100%;
      height: 145px;

      img{
          display: block;
          width: 100%;
          height: 100%;
      }
      p{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-size: 19px;
    color: #fff;
    border-bottom: 2.5px solid #fff;
    padding: 2.5px;
      }
      
  }
  .desc{
    background: #fff;
    padding: 21px 16px;
    font-size: 15px;
    color: #666;
    text-align: center;
  }
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
</style>
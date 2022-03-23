<template>
<div>
     <div class="head">
      <span @click="comeback"><van-icon name="arrow-left" /> 返回</span> <span> 乐居</span>
    </div>
    <p class="canned"><img src="http://yanxuan.nosdn.127.net/8976116db321744084774643a933c5ce.png" alt=""></p>
    <div class="goods">
      <div class="title">
         <span :class="`${current == 'default' ? 'on' : ''}`" @click="vcomb">综合</span>
         <span class="top" @click="sortPrice()">
           <p :class="`${current == 'default'|| this.current == '' ? '' : 'on'}`">
                价格
            </p>
            <div class="iconBox">
                <van-icon :color="current == 'up' ? 'red' : ''"  name="arrow-up" />
                <van-icon :color="current == 'down' ? 'red' : ''"  name="arrow-down" />
            </div>
        </span>
        <span class="open" :class="`${current == '' ? 'on' : ''}`" @click="open">分类</span>
      </div>
     
      <ul class="goodslist">
        <li v-for="item in list" :key="item.id" @click="shopping(val)">
          <img :src="item.list_pic_url" alt="">
          <p>{{item.name}}</p>
          <p>￥{{item.retail_price}}</p>
        </li>
      </ul>
    </div>
    </div>
</template>

<script>
import { goodsList} from "@/api/home/newgoods"
export default {
    data() {
        return {
            list:[],
            id:"",
            order:"",
            current:'default'// default up down
        };
    },
    computed: {

    },
    created() {
        var id = this.$route.params.id;
        this.id = id;
  
       this.init();
    },
    mounted() {

    },
    methods: {
        init(){
            goodsList({
                isHot:this.id == 2 ? 1 : "",
                isNew:this.id == 1 ? 1 : "",
                order:this.order
            })
            .then(res =>{
                console.log(res)
                this.list = res.data;
            })
        },
        sortPrice(){
            if(this.current == "default" || this.current == "" ){
                this.current = "up";
                this.order = "asc"
            }else if(this.current == "up"){
                this.current = "down";
                this.order = "desc"
            }else{
                 this.current = "up";
                 this.order = "asc"
            }
            this.init();
        },
          comeback(){
    this.$router.push(`/home`)
    },
    vcomb(){
        this.current = "default",
       this.order="";
       this.init();
    },
    open(){ 
          this.current = "",
         this.order="";
       this.init();
    },
      shopping(val){
         this.$router.push(`/content?id=${val}`)
    }
    },
};
</script>

<style scoped lang="scss">
@import "./scss/index.scss";
</style>

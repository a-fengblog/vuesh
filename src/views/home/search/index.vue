<template>
  <div class="search">
    <div class="head">
      <span @click="comeback"><van-icon name="arrow-left" /> 返回</span> <span> 乐居</span>
    </div>
    <van-search show-action v-model.trim="val" placeholder="请输入搜索关键词" @input="ipte" @cancel="comeback" />
    <div class="default" v-if="current == 'default'">
      <div class="hos">
        <div class="hos-lef">历史记录</div>
        <div class="hos-rig" @click="clearHistorys">
          <van-icon name="delete-o" />
        </div>
      </div>
      <ul class="sesearch">
        <li v-for="item in list.historyData" :key="item.id" @click="showGoods(item.keyword)" span="6">
          {{ item.keyword }}
        </li>
      </ul>
      <div class="hot"><div>热门搜索</div></div>
      <ul class="sesearch">
        <li v-for="item in list.hotKeywordList" :key="item.id" @click="showGoods(item.keyword)" span="6">
          {{ item.keyword }}
        </li>
      </ul>
    </div>
    <div class="notice" v-else-if="current == 'notice'">
      <ul class="notisearch">
        <li v-for="item in noticeList" :key="item.id"  @click="showGoods(item.name)">
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div class="goods" v-else>
      <div class="title">
         <span :class="`${current == 'goods' ? 'on' : ''}`" @click="vcomb" >综合</span>
         <span class="top" @click="typecheck()">
           <p :class="`${current == 'goods' ||current == ''? '' : 'on'}`">
                价格
            </p>
            <div class="iconBox">
                <van-icon :color="current == 'up' ? 'red' : ''"  name="arrow-up" />
                <van-icon :color="current == 'down' ? 'red' : ''"  name="arrow-down" />
            </div>
        </span>
        <span :class="`${current == '' ? 'on' : ''}`" @click="classify">分类</span>
      </div>
     
      <ul class="goodslist">
        <li v-for="item in goodsList" :key="item.id" @click="shopping(item.id)">
          <img :src="item.list_pic_url" alt="">
          <p>{{item.name}}</p>
          <p>￥{{item.retail_price}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {
  indexaction,
  helperaction,
  addhistoryaction,
  clearhistory,
} from "@/api/home/search";
export default {
  data() {
    return {
      val: "",
      list: {},
      current: "default",
      searlist:[],
      noticeList:[],
      goodsList:[],
      order:"",
      keywordsa:"",
    };
  },
  methods: {
    init() {
      indexaction({
        openId: localStorage.getItem("openId"),
      }).then((res) => {
        console.log(res);
        this.list = res;
      });
    
    },
    comeback(){
    this.$router.push(`/home`)
    },
    clearHistorys() {
      clearhistory({
        openId: localStorage.getItem("openId"),
      }).then((res) => {
        this.init();
      });
    },
    ipte() {
      if (this.val) {
        this.current = "notice";
        helperaction({
          keyword: this.val,
          order: "",
        }).then((res) => {
          console.log(res);
          this.noticeList = res.keywords;
        });
      } else {
        this.current = "default";
      }
    },
    showGoods(value){
       this.current = "goods";
        addhistoryaction({
                keyword:value,
                openId:localStorage.getItem("openId")
            })
            helperaction({
                keyword:value,
                order:""
            })
             .then(res =>{
                    console.log(res)
                   this.goodsList = res.keywords;
                })
      this.keywordsa=value;
    },
    //搜索页面的价格升降
     typecheck(){
    if(this.current == "goods"){
                this.current = "up";
                this.order = "asc"
            }else if(this.current == "up"){
                this.current = "down";
                this.order = "desc"
            }else{
                 this.current = "up";
                 this.order = "asc"
            }
            helperaction({
                keyword:this.keywordsa,
                order:this.order,
            })
             .then(res =>{
                    console.log(res)
             this.goodsList =res.keywords;
         })     
    },
    vcomb(){
        this.current = "goods",
       this.order="";
             helperaction({
                keyword:this.keywordsa,
                order:this.order,
            })
             .then(res =>{
                    console.log(res)
             this.goodsList =res.keywords;
         })  
    },
    classify(){
      this.current ="",
        helperaction({
                keyword:this.keywordsa,
                order:"",
            })
             .then(res =>{
                    console.log(res)
             this.goodsList =res.keywords;
         })  
    },
      shopping(val){
         this.$router.push(`/content?id=${val}`)
    }

  },
   
  created() {
    this.init();
  },
  computed: { 
  },
};
</script>

<style lang="scss" scoped>
@import "./searScss/index.scss";
</style>
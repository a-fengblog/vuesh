<template>
  <div class="order">
    <div class="head">
      <span @click="comeback"><van-icon name="arrow-left" /> 返回</span>
      <span> 乐居</span>
    </div>
    <div class="address" @click="addressx">
      <div class="item">
        <div class="list">
          <div class="addresslist" v-if="show">
            <div > 
              <p>{{ address.name }}</p>
              <div class="moren" v-if="address.is_default == 1 ? true : false">
                默认
              </div>
            </div>
            <div class="info">
              <p>{{ address.mobile }}</p>
              <p>{{ address.address }}</p>
            </div>
            <div></div>
          </div>
          <div v-else> 
              请选择收货地址
          </div>
        </div>
      </div>
    </div>
    <div class="orderbox">
      <div class="item">
        <div>商品合计</div>
        <div>￥ {{price}}</div>
      </div>
      <div class="item">
        <div>运费</div>
        <div>免运费</div>
      </div>
      <div class="item">
        <div>优惠券</div>
        <div>暂无</div>
      </div>
    </div>
     <ul class="shopping">
      <li v-for="item in list" :key="item.id">
  <van-swipe-cell   >
  <van-card
  :price="item.retail_price"
  :desc="item.goods_name"
  :thumb="item.list_pic_url"
/>
    <div class="aab">X{{item.number}}</div>
        </van-swipe-cell>
      </li>
    </ul>
    <div class="bottom">
        <div class="">￥ {{price}}</div>
        <div class="" @click="toge">支付</div>
    </div>
  </div>
</template>

<script>
import { detailAction } from "@/api/order/index.js";
import {Toast} from "vant"
export default {
  data() {
    return {
      list: {},
      address: {},
      isshows: true,
      price:"",
      show:true,
    };
  },
  methods: {
    init() {
      detailAction({
        openId: localStorage.getItem("openId"),
        addressId: ""
      }).then((res) => {
        console.log(res);
        this.list = res.goodsList;
           this.price =res.allPrise
           var aa = JSON.parse(localStorage.getItem("address"))
      if(this.address){
         this.address = aa
      }else{
         this.address = res.address
      }
     console.log(this.address); 
      });
      if(this.address){

      }else{
          this.show =false
      }
    },
    comeback() {
      this.$router.go(-1);
    },
    toge(){
        Toast('暂时没有支付接口');
    },
    addressx(){
     this.$router.push('/address')
    }
  },
  computed: {},
  created() {
    this.init();
  },
  mounted() {},
};
</script>

<style scoped lang="scss">
@import "./scss/index.scss";
</style>

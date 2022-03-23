<template>
  <div class="cart">
    <div class="top">
      <div>30天无忧退货</div>
      <div>48小时快速退款</div>
      <div>满88元免邮费</div>
    </div>

    <ul class="shopping">
      <li v-for="item in cartlist" :key="item.id">
     
        <!-- 回调函数箭头函数执行 -->
  <van-swipe-cell   >
  <van-checkbox v-model="item.ischecked" checked-color="#ee0a24"></van-checkbox>
  <van-card
  :price="item.retail_price"
  :desc="item.goods_name"
  :thumb="item.list_pic_url"
 
/>
    <div class="aab">X{{item.number}}</div>
          <template #right  >
            <van-button
              square
              text="删除"
              type="danger"
              class="delete-button"
             @click="()=>beforeClose(item.id)"
            />
          </template>
        </van-swipe-cell>
      </li>
    </ul>
    <div class="tijiao">
        <van-submit-bar :price="totals*100" button-text="提交订单" @submit="submit">
  <van-checkbox v-model="isAllChecked" checked-color="#ee0a24">全选</van-checkbox>

</van-submit-bar>
    </div>
  </div>
</template>

<script>
import { cartList,deleteAction,submitAction} from "@/api/cart/index.js";
import {Dialog,Toast} from   "vant"
export default {
  data() {
    return {
     checked:false,
    cartlist:[],
    num:{}
    };
  },
    methods: {
init(){
  cartList({
    openId:localStorage.getItem("openId")
  }).then(res=>{
   res.data.forEach(el => {
    el.ischecked = false;
      });
    this.cartlist =res.data
  })
},
 beforeClose(val) {
   console.log(111);
   console.log(val);
      Dialog.confirm({
            message: '确定删除吗？',
          }).then(() => {
             deleteAction({
        id:val
      }).then(res=>{
        console.log(res);
      })
         this.init()
       
    })
    },
 submit(){
            // var arr1= []
            var arr = this.cartlist.filter(ele =>ele.ischecked);
            if(arr.length == 0){
             Toast('请选择商品');
            }else{
              submitAction({
                allPrise:this.totals,
                goodsId:this.cartlist.filter(ele =>ele.ischecked).map(ele => ele.goods_id).join(","),
                openId:localStorage.getItem("openId")
            })
            .then(res =>{
                console.log(res)
                this.$router.push("/order")
            })
            }
         
        },
    },
    //computed里面没有set 属性
  computed: {
    //对象形式里面可以使用get,set
    isAllChecked:{
         get(){
                return this.cartlist.every(ele => ele.ischecked == true)
            },
         set(val){
                // console.log(val)
                this.cartlist.forEach(el =>{
                el.ischecked = val
             })    
            }
    },
    totals(){
          return this.cartlist.reduce((total,current)=>{ // total 上一次循环计算过的结果 current当次循环的数据
                if(current.ischecked){
                    return total + current.retail_price* current.number
                }else{
                    return total
                }
            },0)
     },
  },
  created() {
    this.init()
  },
  mounted() {},

};
</script>

<style scoped lang="scss">
@import "./scss/index.scss";
</style>

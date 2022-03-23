<template>
  <div class="content">
    <div class="head">
      <span @click="comeback"><van-icon name="arrow-left" /> 返回</span>
      <span> 乐居</span>
    </div>
    <div class="swiper">
      <van-swipe indicator-color="#000" class="my-swipe" :autoplay="3000">
        <van-swipe-item v-for="item in swiperList" :key="item.id">
          <img class="imgs" :src="item.img_url" alt="" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="top">
      <div>30天无忧退货</div>
      <div>48小时快速退款</div>
      <div>满88元免邮费</div>
    </div>
    <div class="introduce">
      <p>{{ contentList.info.name }}</p>
      <p>{{ contentList.info.goods_brief }}</p>
      <p>￥{{ contentList.info.retail_price }}</p>
    </div>
    <div class="section-nav" @click="show=!show">
      <div>请选择规格数量</div>
      <div></div>
    </div>
         <van-action-sheet v-model="show" title="商品详情">
             <div class="aab">
                  <div  class="words">
            <div  class="left">
            <img  alt="" src="http://yanxuan.nosdn.127.net/1f4758a9d68c5ebfafd3fc8b960707a6.jpg">
            </div>
        <div  class="right">
            <div >
            <p >价格￥46</p>
            <p >请选择数量</p>
            </div>
            </div>
        </div>
          <div class="b">
            <p >数量</p>
            <van-stepper v-model="nums" />
        </div>
             </div>
      </van-action-sheet>
      <div class="paramter">
          <div class="title">
              商品参数
          </div>
              <div v-for="item in contentList.attribute" :key="item.id" class="runde">
                  <span>{{item.name}}</span>
                  <span>{{item.value}}</span>
              </div>
      </div>
      <div class="desc" v-html="contentList.info.goods_desc"> 
      </div>
      <div class="problem">
          <div  class="h">
            <div  class="line"></div>
            <div  class="title">常见问题</div>
            <div  class="line"></div>
          </div>
          <ul >
              <li v-for="item in contentList.issue" :key="item.id">
                 <div class="questbox">
            <div data-v-83165070="" class="spot"></div>
            <div class="quest">
              {{item.question}}
          </div></div> 
           
         <p>{{item.answer}}</p>
              </li>
          </ul>
      </div>
      <div class="sublist">
               <div class="absa"  v-for="abs in contentList.productList" :key="abs.id" @click="shopping(abs.id)" >
               <img class="abst" :src="abs.list_pic_url" alt="">
               <p>{{abs.name}}</p>
               <p>￥{{abs.retail_price}}</p> 
              </div>
    </div>
    
   <van-goods-action v-model="isshows" >
  <van-goods-action-icon icon="star-o"  :color="contentList.collected?'red':''" @click="collected" />
  <van-goods-action-icon icon="cart-o" text="购物车" :badge=" contentList.allnumber" @click="cart"  />
  <van-goods-action-button type="danger" text="立即购买" />
<van-goods-action-button type="warning" text="加入购物车" @click="addshop"  />
</van-goods-action>  
  </div>
</template>

<script>
import { detailaction ,addCart ,addcollect} from "@/api/content/index.js";
export default {
  data() {
    return {
      swiperList: {},
      contentList: {},
      show:false,
      isshows:false,
      nums:1,
    };
  },
  methods: {
    init() {
      detailaction({
        id: this.$route.query.id,
        openId: localStorage.getItem("openId"),
      }).then((res) => {
        console.log(res);
        this.swiperList = res.gallery;
        this.contentList = res;
      });
    },
    comeback() {
      this.$router.go(-1);
    },
    //加入购物车
    addshop(){
        if(this.show == true){
                addCart({
                    goodsId:this.$route.query.id,
                    number:this.nums,
                    openId:localStorage.getItem("openId")
                })
                .then(res =>{
                    console.log(res)
                    this.init()
                })
            }else{
                this.show = !this.show;
            }
    },
    //添加收藏
     collected(){
            addcollect({
                goodsId:this.$route.query.id,
                openId:localStorage.getItem("openId")
            })
            .then(res =>{
                console.log(res)
                this.init()
            })
        },
    cart(){
      this.$router.push('/cart')
    },
    shopping(val){
         this.$router.push(`/content?id=${val}`)
         }
  },
  created() {
    this.init();
  },
  mounted() {
      
  },
};
</script>

<style lang="scss" scoped>
@import "./scss/index.scss";
</style>
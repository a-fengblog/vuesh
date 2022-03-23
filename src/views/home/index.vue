<template>

    <div class="home">  
        <div id="container"></div>
        <div class="top">
            <span style="width:6em ;dispaly:inline-block" class="map" @click="changeMap">{{cityText}}</span>
            <div @click="goSearch"  >
                   <van-search  disabled    placeholder="请输入搜索关键词" />
            </div>
        </div>
        <van-swipe indicator-color="#000" class="my-swipe" :autoplay="3000" >
            <van-swipe-item v-for="item in homeInfo.banner" :key="item.id">
                <img class="imgs" :src="item.image_url" alt="">
            </van-swipe-item>
        </van-swipe>
      <div  class="title">
          <div v-for="item in homeInfo.channel" :key="item.id"  @click="navTake(item.id)" class="">
              <div class="top">
                  <img :src="item.icon_url" alt="" >
              </div>
              <p>{{item.name}}</p>
          </div>
      </div>
      <div class="dir">
          <p class="tit">品牌制造商直供</p>
       <ul class="content">
             <router-link tag="li" 
            :to="`/home/pinpai?id=${item.id}`" 
            v-for="item in homeInfo.brandList" 
            :key="item.id" >
               <p>{{item.name}}</p>
               <p>{{item.floor_price}}元起</p>
               <img :src="item.new_pic_url" alt="">
          </router-link>
       </ul>
     
      </div>
        <div class="much">
           <p>新品首发</p>
           <router-link to="/home/newgoods/1" tag="button"> 查看全部</router-link>
       </div>
       <ul class="newgood">
           <li v-for="item in homeInfo.newGoods" :key="item.id" @click="shopping(item.id)">
               <div><img :src="item.list_pic_url" alt=""></div>
               <p>{{item.name}}</p>
               <p class="context">{{item.goods_brief}}</p>
               <p>￥{{item.retail_price}}</p>
           </li>
       </ul>
        <div class="recommend">
           <p>人气推荐 · 好物精选</p>
           <router-link to="/home/newgoods/2" tag="button">查看全部</router-link>
       </div>
         <ul class="newgood">
           <li v-for="item in homeInfo.hotGoods" :key="item.id" @click="shopping(item.id)"> 
               <div ><img :src="item.list_pic_url" alt=""></div>
               <p>{{item.name}}</p>
               <p class="context">{{item.goods_brief}}</p>
               <p>￥{{item.retail_price}}</p>
           </li>
       </ul>
       <div class="special">
           <div class="title">专题精选<span icon="arrow"></span></div>
          <ul> 
              <li v-for="item in homeInfo.topicList" :key="item.id" @click="ontopic(item.id)">
               <img :src="item.item_pic_url" alt="">
               <div>
                   <p>{{item.title}}</p>
                 <p>{{item.price_info}}元起</p></div>
               <p>{{item.subtitle}}</p>
           </li>
           </ul>
       </div>
       <div v-for="item in homeInfo.newCategoryList" :key="item.id" class="list" >
           <div class="head">{{item.name}}好物</div>
           <div class="sublist">
               <div class="absa"  v-for="abs in item.goodsList" :key="abs.id" @click="shopping(abs.id)">
               <img class="abst" :src="abs.list_pic_url" alt="">
               <p>{{abs.name}}</p>
               <p>￥{{abs.retail_price}}</p> 
              </div>
                <div class="names" @click="byId(item.id)">
                  <p>{{item.name}}好物</p>
                  <img src="../../assets/daohang.png" alt="">
                </div>
           </div>
           
       </div>
    </div>
</template>

<script>
import {  index} from "@/api/home" 
import { mapState } from "vuex";
export default {
    data() {
        return {
            homeInfo:{}, 
            cityText:{},  
        };
    },
    methods: {
       initsw(){
         index().then(res =>{
            console.log(res)
            this.homeInfo = res
        })
       },
     goSearch(){
            this.$router.push(`/home/search`)
        },
        changeMap(){
            this.$router.push(`/home/map`)
        },
           navTake(val){
        this.$router.push(`/category/prolist?id=${val}`)
    },
    byId(val){
        this.$router.push(`/category/prolist?id=${val}`)
    },
    shopping(val){
         this.$router.push(`/content?id=${val}`)
    },
       ontopic(val){
      this.$router.push(`/topic/detailaction?id=${val}`)
        },
    },
    computed: {
 
    },
    created() {
     this.initsw()
    },
    mounted() {
          var _this = this;
        // vuex 中已经有传递的数据
          if(this.$store.state.cityInfo.name){
               _this.cityText  = this.$store.state.cityInfo.name;
            var cityInfo = this.$store.state.cityInfo;
             var map = new AMap.Map('container',{
                zoom:1,
                center: [cityInfo.location.lng, cityInfo.location.lat]
            });
             var marker = new AMap.Marker({
                position:[cityInfo.location.lng, cityInfo.location.lat]//位置
            })
            map.add(marker);//添加到地图
            return
        }
      
        AMap.plugin('AMap.CitySearch', function () {
            var citySearch = new AMap.CitySearch()
            citySearch.getLocalCity(function (status, result) {
                if (status === 'complete' && result.info === 'OK') {
                // 查询成功，result即为当前所在城市信息
                    console.log(result)
                    _this.cityText = result.city;
                    
                }
            })
        })

    },
  };
</script>

<style  lang="scss" scoped>
*{
    padding: 0;
    margin: 0;
}
.home{
   
    background-color: #f5f5f5;
    .imgs{
        width: 100%;
    }
    ::v-deep .van-swipe__indicator{
        background-color:red;
    }  

}

.top{
    display: flex;
    line-height: 50px; 
    span{
    margin-left: 10px;
}
 ::v-deep .van-search{
        width: 200px;
        height:50px;
        background-color: #f5f5f5;
    }
        .map{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    
}
.title{

    display: flex;
    justify-content: space-evenly;
    background-color: #fff;
    padding: 10px 0;
    margin-bottom: 8px;
    .top{
       margin:0 0 16px 0;
       width: 30px;
       height: 30px;
       img{
           width: 100%;
           height:100%;
       }
    }
}
.dir{
    background-color: #fff;
    overflow: hidden;
   .tit{
       margin:20px auto;
       font-size: 12px;
   }
   .content{
     
       display: flex;
       flex-wrap: wrap;
       justify-content: space-evenly;
      
       li{
       position: relative;
       width: 48%;
     
        margin:2px 0px;
       p:nth-child(1){
           position: absolute;
           top:20px;
           left:5.206px;
       }
        p:nth-child(2){
           position: absolute;
           top:50px;
           left:5.206px;
       }
       img{
           width: 100%;
           height: 100%;
       }
       }
       
   }
}
.much{
     height: 122px;
    background-color:#f1f7fd ;
    text-align: center;
    overflow: hidden;
     margin-top: 10px;
    p{
        margin: 40px 0 16.657px 0;
        color: #8c9bae;
        font-size: 16px;
    }
    button{
        border: none;
        width: 90px;
        height:24px;
        line-height: 24px;
        background: #d8e4f0;
        font-size: 11px;
        color: #8c9bae;
    }
}
.newgood{
    width: 100%;
    white-space: nowrap;
    overflow: auto;
    background-color: #fff;
    margin-top:10.414px;
    li{
        width: 3.73333rem;
    height: 5.54667rem;
    margin: .06667rem 0 .06667rem .33333rem;
    display: inline-block;
    img{
        display: block;
        width: 140px;
       height: 140px;
    }
     p:nth-child(2){
            font-size: 16px;
           font-weight: 700;
           margin: 4.164px 0 15.616px 0;
    }
      :nth-child(3){
       color: #8a8a8a;
      font-size: 12px;
    }
      :nth-child(4){
      color: #9c3232;
      font-size: .32rem;
      text-align: start;
      margin-bottom: 24px;
    }
    p{
    width: 94%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-top: 4px;
    text-indent: 1em;
    }
    
    }  
}
.recommend{
      height: 122px;
    background-color:#fef7e3 ;
    text-align: center;
    overflow: hidden;
     margin-top: 10px;
    p{
        margin: 40px 0 16.657px 0;
        color: #8c9bae;
        font-size: 16px;
    }
    button{
        border: none;
        width: 90px;
        height:24px;
        line-height: 24px;
        background: #f4e9cb;
        font-size: 11px;
        color: #b1a279;
    }
}
.special {
    background-color: #fff;
    height:300px;
    .title{
       width: fit-content;
       margin:0 auto;
        padding: 18.739px 0;
        span{
            width: 16.625px;
          height: 16.625px;
         background: url("../../assets/arrow.png") no-repeat 0 0;
         background-size: 100% 100%;
         margin-left:10px;
        }
    }
    ul{
     white-space: nowrap;
      overflow: auto;
      :last-child{
          margin-right: 12.5px;
      }
   li{   
    display: inline-block;
    width: 287.5px;
    margin-left: 12.5px;
        img{
            width: 287px;
             height:162.5px;
             display: block;
            border-radius: 5px;

        }
        div{
            display: flex;
            justify-content: space-between;
            :nth-child(1){
                color: #000;
              font-size: 15px;
              font-weight: 700;
            }
            :nth-child(2){
                margin-right:0px;
               color: #9c3232;
                font-size: 12px;
            }
        }
         p{
        color: #8a8a8a;
       font-size: 12px;
        overflow: hidden;
        white-space: nowrap;
      text-overflow: ellipsis;
      margin-top: 4px;
      text-align: start;
    }
    :last-child{
        margin:12.5px 0;
    }
    }
    }
   
}
.list {
    margin-top:10.411px;
    .head{
        text-align: center;
        margin: 13.013px 0;
    }
    .sublist{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
  .absa{
      p{
          text-align: start;
          margin:12px 0;
         text-indent: 1em;
      }
      :nth-child(2){
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
         width: 98%;
         padding: 10px 0;
      }
      :nth-child(3){
          
              color: #9c3232;
      }
  }
        div{
            width: 48%;
            height: 221px;
            margin-bottom: 5.205px;
            background-color: #fff;
        }
        .names{
            p{
                margin-top: 50px;
                color: #333;
                font-size: 16.5px
            }
            img{
                margin-top: 31.232px;
                width: 36.42px;
                height: 36.42px;
            }
        }
        .abst{
      width: 130px;
       height: 130px;
      }
    }

}
#container {width:0; height: 0} 
</style>

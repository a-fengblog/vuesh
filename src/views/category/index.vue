<template>
  <div class="category">
    <div class="head">
      <van-search disabled type="text" v-model="text" />
    </div>
    <div class="title">
        <div class="left">
                 <!-- 利用下标来判断是否高亮 -->
      <div  v-for="(item, index) in list"    
        :class="{ active: index == currentIndex }"
        :key="item.id"
        @click="toggleTab(index,item.name)"     
        class="tagtit"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="right">
        <div class="ri-top">
         <img :src="bannerUrl" alt="">
        </div>
        <div class="ri-bottom">
            <p class="project-tit">{{protit}}分类</p>
            <ul>
                <li v-for="item in childList" :key="item.id"  @click="navTake(item.id)">
                    <img :src="item.wap_banner_url" alt="">
                    <p>{{item.name}}</p>
                </li>
            </ul>
        </div>
    </div>
    </div>
    
  </div>
</template>

<script>

import { indexaction, currentaction } from "@/api/category";
export default {
  data() {
    return {
      text: "商品搜索,共239款好物",
      list: [],
      currentIndex: 0,
      childList: [],
      protit:"居家",
      bannerUrl:'',
    };
  },
  methods: {
    toggleTab(index,val) {
        //绑定对应下标的数据
      this.currentIndex = index;

      this.protit =val;//获取标签名字

      //请求对应下表的列表数据
      currentaction({
        id: this.list[index].id,
      }).then((result) => {
        console.log(result);
        this.childList = result.data.currentOne.subList;
        console.log(this.childList);
        // this.list = res.categoryList
        this.bannerUrl =result.data.currentOne.banner_url
      });
    },
    async init() {
        //请求标签名
      var res = await indexaction();
      this.list = res.categoryList;
    // 请求图片数据
      currentaction({
        id: this.list[this.currentIndex].id,
      }).then((result) => {
        console.log(result);
        //赋值给banner广告页
        this.bannerUrl =result.data.currentOne.banner_url;
        //传递每一项的图片
        this.childList = result.data.currentOne.subList;
        // this.list = res.categoryList
      });
    },

    navTake(val){
        this.$router.push(`/category/prolist?id=${val}`)
     
    },
 
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

<template>
  <div class="address">
    <div class="head">
      <span @click="comeback"><van-icon name="arrow-left" /> 返回</span>
      <span> 乐居</span>
    </div>
    <div class="hedls">
         <div class="list" v-for="item in list" :key="item.id" >
      <div class="addresslist" @click="goOrder(item)">
        <div>
          <p>{{item.name}}</p>
          <div class="moren" v-if="item.is_default == 1 ? true : false">默认</div>
        </div>
        <div class="info">
          <p>{{item.mobile}}</p>
          <p class="over">
           {{item.address}}
          </p>
        </div>
        <div @click.stop="gomain(item)"></div>
      </div>
    </div>
    </div>
   <div  class="bottom">
       <div @click="gosmain" >+新建地址</div>
 </div>
  </div>
</template>

<script>
import {
  saveAction,
  detailAction,
  deleteAction,
  getListAction,
} from "@/api/address/index.js";
export default {
  data() {
    return {
      list: {},
    };
  },
  methods: {
    init() {
      getListAction({
        openId: localStorage.getItem("openId"),
      }).then((res) => {
        console.log(res);
        this.list = res.data;
      });
    },
    comeback() {
      this.router.go(-1);
    },
     goOrder(val){
            localStorage.setItem("address",JSON.stringify(val))
            this.$router.go(-1);
    },
    gomain(val){
            localStorage.setItem("address",JSON.stringify(val))
        this.$router.push('/address/main')
    },
    gosmain(){
     localStorage.setItem("address",JSON.stringify({}))
      this.$router.push('/address/main')
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

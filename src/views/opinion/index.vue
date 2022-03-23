<template>
    <div>
 <div class="head">
      <span @click="comeback"><van-icon name="arrow-left" /> 返回</span> <span> 乐居</span>
    </div>
    <div class="title">意见与反馈</div>
    <van-field
  v-model="message"
  rows="2"
  autosize
  label="留言"
  type="textarea"
  maxlength="150"
  placeholder="请输入留言"
  show-word-limit
/>
<van-field
  v-model="tel"
  label="手机号"
  placeholder="请输入联系方式"
/>
<van-button type="danger" size="large" @click="Okey">提交</van-button>

    </div>
    
</template>

<script>
import { submitAction } from "@/api/opinion/index.js";
export default {
    data() {
        return {
message:'',
tel:"",

        };
    },
    methods: {
comeback(){
    this.$router.go(-1)
},
Okey(){
submitAction({
    content:this.message,
    name:"阿飞上山 Ae86",
    openId:localStorage.getItem("openId"),
    phone:this.tel
})
}
    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
};
</script>

<style scoped lang="scss">
.head {

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
     text-align: start;
     font-size: 18px;
     margin-bottom: 8px;
 }
</style>

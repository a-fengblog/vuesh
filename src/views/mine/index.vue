<template>
    <div class="my">
        <div class="myinfo">
            <img src="http://yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png" alt="">
        <div>
            <p></p>
            <p>用户</p>
        </div>
   </div>
         <ul class="iconlist">
            <li>我的订单</li>
            <li>优惠券</li>
            <li>我的足迹</li>
            <li @click="collectlist">我的收藏</li>
            <li @click="addren">地址管理</li>
            <li>联系客服</li>
            <li>帮助中心</li>
            <li @click="opin">意见反馈</li>
            <li></li>
        </ul>
   
    </div>

</template>

<script>
export default {
    data() {
        return {

        };
    },
    methods: {
collectlist(){
    this.$router.push("/collect")
},
addren(){
    this.$router.push("/address")
},
opin(){
    this.$router.push("/opinion")
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
.my{
    background-color: #f5f5f5 !important;
    ul.iconlist{
    display: flex;
    align-items: center;
    background: #fff;
    flex-wrap: wrap;
    li{
        width: 33.33%;
    padding: 25.0001px 0;
    text-align: center;
    border-right: .4999px solid rgba(0,0,0,.15);
    border-bottom: .4999px solid rgba(0,0,0,.15);
    box-sizing: border-box;
    }
    }
}
.myinfo{
    width: 100%;
    height: 139.9999px;
    display: flex;
    align-items: center;
    background: #333;
    padding: 0 15px;
    box-sizing: border-box;
   img{
    height: 73.9999px;
    width: 73.9999px;
    border-radius: 50%;
    }
div {
    margin-left: 15px;
     p{
    color: #fff;
    font-size: 15px;
    margin-bottom: 4.9999px;
}
:nth-child(2) {
    font-size: 14px;
}
    }
}
</style>


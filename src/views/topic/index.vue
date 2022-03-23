<template>
    <div class="topic">
        <van-list
            v-model="loading"
            :finished="finished"
            :immediate-check="false"
            finished-text="没有更多了"
            @load="onLoad"
            >
           <ul class="topic-content">
                <li v-for="item in list" :key="item.id" @click="ontopic(item.id)" >
                    <img class="pic" :src="item.scene_pic_url" alt="">
                    <h2>
                        {{ item.title }}
                    </h2>
                    <p>{{item.subtitle}}</p>
                    <p>￥{{item.price_info}}元起</p>
                </li>
            </ul>
        </van-list>
        
    </div>
</template>

<script>
import {
    listaction
} from "@/api/topic"
export default {
    data() {
        return {
            info:{},
            list:[],
            loading:false,
            finished:false,
            start:1
        };
    },
    computed: {

    },
    created() {
        this.init()
    },
    mounted() {

    },
    methods: {
        onLoad(){
            // 当列表底部与可视区域的距离小于offset时
            console.log(1)
           
            this.start ++;
            this.init();
        },
        ontopic(val){
      this.$router.push(`/topic/detailaction?id=${val}`)
        },
        init(){
            // 1   4
            // 2   4
            // 3   4
            // 4   4
            listaction({
                page:this.start
            })
            .then(res =>{
                console.log(res);
                // this.info = res;   ...[1,2]
                this.list.push(...res.data);// [1,2]
                // 当数据请求完毕之后  变更加载状态
                this.loading = false;
                if(this.start >=  res.total){ // 4    4
                    this.finished = true;
                }
                // 请求到最后一页数据  禁止load事件触发
            })
        }
    },
};
</script>

<style scoped lang="scss">
.topic{
    background-color: #f5f5f5;
    padding-bottom: 50px;
    .pic{
        width: 100%;
    }
    .topic-content{
        overflow: hidden;
        li{
            background-color: #fff;
            margin-bottom: 8px;
            :nth-child(3){
              color: #999;
             font-size: 12px;
            margin-top: 8px;
             padding: 8px 0 5px 0;
            }
            :nth-child(4){
            color: #b4282d;
            font-size: 13.5px;
            margin-top: 10px;
           padding-bottom: 25px;
            }
        }
    }
}
</style>

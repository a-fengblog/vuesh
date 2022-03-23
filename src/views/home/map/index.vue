<template>
  <div>
      <div class="head">
      <span @click="comeback"><van-icon name="arrow-left" /> 返回</span> <span> 乐居</span>
    </div>
       <van-search  v-model="ipt" show-action label="地址" placeholder="请输入搜索关键词">
  <template #action> </template></van-search> 
         <ul>
             <li @click="goHome(item) " v-for="item in mapList" :key="item.id">
                 {{item.name}}
             </li>
         </ul>

  <p>显示位置:</p>
    <div id="container">
 </div> 
  </div>
</template>

<script>
import { mapMutations  } from "vuex";
export default {
    data() {
        return {
            ipt: '',
            cityText:"",
            mapList:[]
        };
    },
    watch:{
         ipt(){
             AMap.plugin("AMap.AutoComplete",()=>{
                 var autoOptions ={
                     city:this.cityText
                 }
                 //实例化AutoComplete
                  var AutoComplete =new AMap.AutoComplete(autoOptions);
                  //根据关键字进行搜索
                  AutoComplete.search(this.ipt,(status,result)=>{
                      console.log("结果",result);
               
                     this.mapList = result.tips;
                  })
             })
         }
    },
    methods:{
        goHome(val){
         this.addcityInfo(val);
         this.$router.push("/home")
        },
      ...mapMutations({
          addcityInfo:"uptCityInfo"
      }),
            comeback(){
    this.$router.push(`/home`)
    },
    },
    computed:{

    },
    mounted(){
     var _this = this;
        AMap.plugin('AMap.CitySearch', function () {
            var citySearch = new AMap.CitySearch()
            citySearch.getLocalCity(function (status, result) {
                if (status === 'complete' && result.info === 'OK') {
                // 查询成功，result即为当前所在城市信息
                  
                    _this.cityText = result.city;
                   
                }
            })
        })
        if(this.$store.state.cityInfo.name){
            var cityInfo = this.$store.state.cityInfo;
             var map = new AMap.Map('container',{
                zoom:18,
                center: [cityInfo.location.lng, cityInfo.location.lat]
            });
             var marker = new AMap.Marker({
                position:[cityInfo.location.lng, cityInfo.location.lat]//位置
            })
            map.add(marker);//添加到地图
            return
        }
        var map = new AMap.Map('container',{
            zoom:8
        });
}
}
</script>
<style lang="scss" scoped>
@import "./scss/index.scss" ;

</style>
<template>
    <div class="main">
<div class="head">
      <span @click="comeback"><van-icon name="arrow-left" /> 返回</span>
      <span> 乐居</span>
</div>
  <!-- 添加列表 -->
    <van-address-edit
      :area-list="areaList"
      :address-info="AddressInfo"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :area-placeholder="arr"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @change-default="ChangeDefault"
    />

    </div>
</template>

<script>
import { areaList } from "@vant/area-data";
import { saveAction } from "@/api/address/index.js";
export default {
    data() {
        return {
       areaList,
     aab:"false",
      list: [],
      AddressInfo:{},
      arr:"",
      id:"",
       tel:"",
        };
    },
    methods: {
  init(){
    var content=JSON.parse(localStorage.getItem('address'));
    console.log(content);
    this.tel = content.mobile
     this.AddressInfo = content;
     this.arr=content.address
     this.postalCode=content.content
     this.id = content.id 
     
  },
  comeback(){
      this.$router.go(-1)
  },
  async onSave(content){
 console.log(content);
      var addre = [content.province, content.city, content.county];
    await  saveAction({
        address: addre.join(" "), //地址
        addressId:this.id, //判断是新增还是修改地址，如果是新增就不需要传，如果是修改就是地址对应的id
        checked: content.isDefault, //是否默认选中
        detailadress: content.addressDetail, //详细地址
        openId: localStorage.getItem("openId"),
        telNumber: content.tel,
        userName: content.name,
      }).then((res) => {
          console.log(res);
        localStorage.setItem("address", JSON.stringify(res));
        this.init();
      });
    this.$router.go(-1)
  },
  ChangeDefault(value){
   console.log(value);
  }
 
    },
    computed: {

    },
    created() {
   this.init()
    },
    mounted() {

    },
};
</script>

<style scoped lang="scss">
@import "./scss/index.scss";
</style>

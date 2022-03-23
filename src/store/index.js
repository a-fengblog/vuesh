import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cityInfo:{} ,   //手机城市的值
    id:"",
  },
  mutations: {
    uptCityInfo(state,val) {
      state.cityInfo = val
    },
    computerId(state,val){
      state.id = val
      console.log(val);
    }
    
  },
  actions: {
  },
  modules: {
  }
})

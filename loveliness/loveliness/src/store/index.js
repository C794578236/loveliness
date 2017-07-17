import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    //所有要共同操作的数据都在这里声明
  //初始化state

  state : {
   
    
  },

//避免操作原始数据
    getters:{
      getinfo(state){
          return state
      }
    },
  //计算方法在这里写
  mutations:{
    
  },


})

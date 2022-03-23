import request from "@/api/request"
//保存和跟添加收货地址
function saveAction(data){
   return request({
        method: 'post',
        url: '/address/saveAction',
      data
    })
}
//获取收货地址详情
function detailAction(data){
   return request({
        method: 'get',
        url: '/address/detailAction',
        params: data
    })
}
//删除收货地址
function deleteAction(data){
   return request({
        method: 'get',
        url: '/address/deleteAction',
        params:data
    })
}
//获取收货地址列表
function  getListAction(data){
    return request({
         method: 'get',
         url: '/address/getListAction',
         params: data
     })
 }

export {
    saveAction,
    detailAction,
    deleteAction,
    getListAction
}
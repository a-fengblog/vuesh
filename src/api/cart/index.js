import request from "@/api/request"


function cartList(data){
    return request({
         method: 'get',
         url: '/cart/cartList',
         params:data
     })
 }

 function deleteAction(data){
    return request({
         method: 'get',
         url: '/cart/deleteAction',
         params:data
     })
 }
 function submitAction(data){
    return request({
         method: 'POST',
         url: '/order/submitAction',
         data
     })
 }
 export {
    cartList,
    deleteAction,
    submitAction
}

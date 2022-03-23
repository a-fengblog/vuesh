import request from "@/api/request"

function categoryNav(data){
    return request({
         method: 'get',
         url: '/category/categoryNav',
         params:data
     })
 }

 function categoryGoodsList(data){
    return request({
         method: 'get',
         url: '/goods/goodsList',
         params:data
     })
 }

 export {
        categoryNav,
        categoryGoodsList
}

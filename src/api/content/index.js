
import request from "@/api/request"

function detailaction(data){
   return request({
        method: 'get',
        url: '/goods/detailaction',
        params:data
    })
}
function addcollect(data){
   return request({
        method: 'post',
        url: '/collect/addcollect',
        data
    })
}
function addCart(data){
   return request({
        method: 'post',
        url: '/cart/addCart',
        data
    })
}

export {
    detailaction,
    addcollect,
    addCart
}
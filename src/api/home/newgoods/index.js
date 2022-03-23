import request from "@/api/request"

function goodsList(data){
   return request({
        method: 'get',
        url: '/goods/goodsList',
        params:data
    })
}

export {
    goodsList
}
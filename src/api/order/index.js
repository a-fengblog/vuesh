import request from "@/api/request"
function detailAction(data){
   return request({
        method: 'get',
        url: '/order/detailAction',
        params:data
    })
}

export {
    detailAction
}
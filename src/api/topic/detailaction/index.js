import request from "@/api/request"
function detailaction(data){
   return request({
        method: 'get',
        url: '/topic/detailaction',
        params:data
    })
}

export {
    detailaction
}
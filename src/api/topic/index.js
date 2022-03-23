import request from "@/api/request"
function listaction(data){
   return request({
        method: 'get',
        url: '/topic/listaction',
        params:data
    })
}

export {
    listaction
}
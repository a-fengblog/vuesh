

import request from "@/api/request"



function detailaction(data){
   return request({
        method: 'get',
        url: '/brand/detailaction',
        params:data
    })
}
export {
    detailaction
}

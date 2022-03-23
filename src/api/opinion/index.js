
import request from "@/api/request"
function submitAction(data){
   return request({
        method: 'post',
        url: '/feedback/submitAction',
        data
    })
}

export {
    submitAction
}
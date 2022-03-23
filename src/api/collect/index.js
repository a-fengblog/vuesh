import request from "@/api/request"

function listAction(data){
    return request({
         method: 'get',
         url: '/collect/listAction',
         params:data
         
     })
 }

 export {
    listAction
 }
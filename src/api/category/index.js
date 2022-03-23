import request from "@/api/request"


function indexaction(){
    return request({
         method: 'get',
         url: '/category/indexaction'
     })
 }
 function currentaction(data){
    return request({
         method: 'get',
         url: '/category/currentaction',
         params:data
     })
 }
 
 export {
     indexaction,
     currentaction
 }
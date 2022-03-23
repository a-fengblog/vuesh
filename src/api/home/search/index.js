import request from "@/api/request"



function indexaction(data){
   return request({
        method: 'get',
        url: '/search/indexaction',
        params:data
    })
}
function helperaction(data){
   return request({
        method: 'get',
        url: '/search/helperaction',
        params:data
    })
}
function addhistoryaction(data){
   return request({
        method: 'post',
        url: '/search/addhistoryaction',
        data
    })
}
function clearhistory(data) {
    return request({
        method: 'post',
        url: '/search/clearhistoryAction',
        data
    })
}
export {
    indexaction,
    helperaction,
    addhistoryaction,
    clearhistory
}
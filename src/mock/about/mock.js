let Mock = require("mockjs")

let data =[
    {id:0,title:"中国 npm 镜像源升级公告",name:"fengmk2",num:"46583",text:"12"},
    {id:1,title:"【望周知，求扩散】淘宝 NPM 镜像站喊你切换新域名啦",name:"fengmk2",num:"46583",text:"12"},
    {id:2,title:"Node.js 2021年开发者报告解读：健康稳步的发展中",name:"fengmk2",num:"46583",text:"12"},
    {id:3,title:"【2021/11/26】请大家遵纪守法，勿发布不合规内容",name:"fengmk2",num:"46583",text:"12"},
    {id:4,title:"node+vue3+vite+ts开源免费的后台管理系统",name:"fengmk2",num:"46583",text:"12"},
]

Mock.mock("/api/about","get",function(config){
    // console.log(config)
    return data
})

Mock.mock(/\/api\/about\/\d/,"delete",function(config){
    console.log(config.url)
    let arr = config.url.split('/')
    let id  = arr.pop()
    data.splice(id,1)
    data.forEach(function(item,index){      //解决数组塌陷
        item.id = index
        // data[index].id = index
    })
    return data
})
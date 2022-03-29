let Mock = require("mockjs")

Mock.mock("/api/home",function(res){
    let obj = JSON.parse(res.body)
    if(obj.name == "admin" && obj.pw == '123456'){
        return {
            status:200,
            message:"success",
            data:{user:"admin",pw:"123456",token:"123"}
        }
    }else{
        return {
            status:200,
            message:"fill",
            data:"登陆信息不正确"
        }
    }
})
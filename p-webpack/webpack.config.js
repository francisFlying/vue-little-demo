//使用webpack捆绑代码
const path=require("path");
//这个文件最终由node解析
const obj={
    entry:{
        index:"./app.js"
    },
    output:{
        path:path.join(__dirname,"./dist"),
        filename:"bundle.js"
    }
}
module.exports = obj

// //second
// const path=require("path");
// const obj={
//     entry:{
//         index:"./app.js"
//     },
//     output:{
//         path:path.join(__dirname,"./dist"),
//         filename:"bundle.js"
//     }
// }
// module.exports=obj

// //third
// const path=require("path");
// const obj={
//     entry:{
//         index:"./app.js"
//     },
//     output:{
//         path:path.join(__dirname,"./dist"),
//         filename:"bundle.js"
//     }
// }
// module.exports=obj
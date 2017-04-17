const htmlplugin=require('html-webpack-plugin');
const path=require('path');
const obj={
  entry:{
    index:'./src/app.js'
  },
  output:{
    path:path.join(__dirname,"./dist"),
    filename:"bundle.js"
  },
  module:{
    loaders:[
      {
        test:/\.js$/,
        loaders:'babel-loader',
        query:{
          presets:['es2015']
        }
      },
      {
        test:/\.vue$/,
        loader:'vue-loader'
      }
    ]
  },
  plugins:[
    new htmlplugin({
      template:'./src/webpack.html'
    })
  ]
}

module.exports=obj
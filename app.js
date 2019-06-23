const express = require('express')
const path = require('path')
const session = require('express-session')
const app = new express()

const userRouter = require('./routes/user')

// 静态化文件
app.use(express.static('public'))
app.use('/node_modules', express.static('./node_modules'))
// 配置模板
app.engine('html', require('express-art-template'))
// 设置模板目录 
app.set('views', path.join(__dirname, './views/')) // 默认就是 ./views 目录
// 配置解析表单post请求体报文
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false}))

app.use(session({
    // 配置加密字符串，它会在原有加密基础之上和这个字符串拼起来去加密
    // 目的是为了增加安全性，防止客户端恶意伪造
    secret: 'itcast',
    resave: false,
    saveUninitialized: false // 无论你是否使用 Session ，我都默认直接给你分配一把钥匙
}))

// 使用路由
app.use(userRouter)

// 配置处理404 的中间件
app.use((req, res) => {
    res.render('404.html')
})

// 配置一个全局错误处理中间件
app.use((err, req, res, next) => {
    res.status(500).json({
        err_code: 500,
        message: err.message
    })
})

app.listen(3000, () => {
    console.log('服务器开启，访问地址：http://localhost:3000')
})

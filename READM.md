# 多人社区(node练手项目) 

- 该网站用到的技术：
  + node的express框架（搭建后台）
  + art-template模板（渲染试图页面）
  + mongoose第三方（操作mongodb数据库）
  + boostrapUI框架 (美化UI界面)
  + jquery库 (进行js操作和异步请求)

- 该网站组成：
  + 登陆页面
    * 登录功能
    * 输入字段 email(邮箱), password(密码)
  + 注册页面
    * 注册功能
    * 输入字段 email(邮箱), nickname(昵称), password(密码)
  + 首页
    * 搜索功能 (根据标题搜索相关话题)
    * 展示话题文章列表
    * 分页功能
    * 退出功能
    * 展示字段(每个话题的在列表首页的字段展示) 
      * title(标题) publish_time(发布时间) browse_num(浏览量) concern_num(关注量) reply_num(回复数)  
  + 账户设置页面
    * 修改密码功能
      * 字段：password(老密码) new_password(新密码) new_password2(确认密码)
    * 注销账号功能
  + 用户基本信息页面
    * 展示用户信息
    * 编辑用户信息
    * 上传更改用户头像
    * 字段: email(邮箱) nickname(昵称) introduce(介绍) gender(性别) birth(生日)
  + 话题详情页面
    * 展示话题文章
    * 字段 title(标题) author(作者) createon_time(创建时间) browse_num(浏览量) orgin(来源) comments(评论列表) article(文章)
  + 发布话题页面
    * 发布文章
    * 字段：title(标题) article(文章)    

**后台接口地址请前往[传送门](./api.md)**



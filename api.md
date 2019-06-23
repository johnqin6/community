1. 用户注册
接口地址：http://localhost:3000/register      
接口参数: email, nickname, password    
接口类型：post   

2. 用户登录
接口地址：http://localhost:3000/login      
接口参数: email, password    
接口类型：post  

3. 用户退出
接口地址：http://localhost:3000/logout      
接口参数: 无   
接口类型：get

4. 用户注销
接口地址：http://localhost:3000/user/delete      
接口参数: 无   
接口类型：get

5. 用户更新密码
接口地址：http://localhost:3000/user/updatePassword     
接口参数: password(老密码), newPassword(新密码)   
接口类型：post

6. 用户信息编辑
接口地址：http://localhost:3000/user/edit     
接口参数: nickname, gender, avatar, introduce, birth   
接口类型：post  

7. 获得文章列表
接口地址：http://localhost:3000/article/getArticleData    
接口参数: type   
接口类型：get  

8. 获得文章详情
接口地址：http://localhost:3000/article/getArticleDetail    
接口参数: id(文章id) 
接口类型：get

8. 发布文章
接口地址：http://localhost:3000/article/addArticle     
接口参数: title, content, type
接口类型：post

9. 关注文章
接口地址：http://localhost:3000/article/followArticle     
接口参数: articleid
接口类型：get

10. 点赞文章
接口地址：http://localhost:3000/article/praiseArticle     
接口参数: articleid
接口类型：get

11. 发表评论
接口地址：http://localhost:3000/comment/addArticleComment       
接口参数: content
接口类型：post

12. 获得对应文章评论
接口地址：http://localhost:3000/comment/getCommentDataByArticle       
接口参数: articleid
接口类型：get

13. 回复评论
接口地址：http://localhost:3000/comment/replyComment       
接口参数: commentid, replyContent
接口类型：post

14. 点赞评论
接口地址：http://localhost:3000/comment/praiseComment       
接口参数: commentid
接口类型：get

15. 举报评论
接口地址：http://localhost:3000/comment/reportComment       
接口参数: commentid
接口类型：get
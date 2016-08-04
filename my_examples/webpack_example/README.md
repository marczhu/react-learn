example1 - example4  来自于http://www.jianshu.com/p/b95bbcfc590d

## 发布服务器
```
npm install webpack-dev-server -g
webpack-dev-server --progress --colors
```
服务器可以自动生成和刷新，修改代码保存后自动更新画面(没搞明白，试了试修改js和css文件是不可以自动刷新的)
```
http://localhost:8080/webpack-dev-server/bundle
```
当把webpack_example目录移动到其他位置，使用webpack报错(webpack应该跟npm的package.json目录有关)
```
Module not found: Error: Cannot resolve module 'style' in E:\workspace\react-lea
rn\webpack_example\example4
```
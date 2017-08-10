//require 模块化方案
//fs 核心模块 不用安装 语言自带
const fs = require('fs');
//node 的功能是分模块的
//前端是没有fileSystem
//node 负责后端的 linux 服务器在一起的
//宿主环境不一样 windows需要安装Ubuntu
//node 是异步无阻塞的后端 并处相当牛逼
//callback  第一参数是错误 信息交给第二个参数
fs.stat('a.js', (err, stats) =>{
    if (err) {
        console.log(JSON.stringify(err));
    }else{
        console.log(stats);
        console.log(`文件：${stats.isFile()}`);
        console.log(`目录：${stats.isDirectory()}`);
        console.log(`文件：大小${stats.size()} 创建日期${stats.ctime()}`);
    }
})
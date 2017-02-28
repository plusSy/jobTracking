// 引入 gulp
var gulp = require('gulp');
var connect = require('gulp-connect');

//使用connect启动一个Web服务器
gulp.task('connect', function () {
    connect.server({
        port: 3000,
        livereload: true,
        root: 'app'
    });
});

//运行Gulp时，默认的Task
gulp.task('default', ['connect']);

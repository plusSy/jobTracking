// 引入 gulp
var gulp = require('gulp');

// 引入组件
//var jshint = require('gulp-jshint');
var connect = require('gulp-connect');
//var argv = require('yargs').argv;
//var rename = require('gulp-rename');
//var gulpNgConfig = require('gulp-ng-config');
//
//gulp.task('ng-config', function(){
//    //default configuration.
//    var path = './app/config/local.json';
//    if(argv.env){
//        switch(argv.env.toLowerCase()){
//            case 'local':
//                path = './app/config/local.json';
//                break;
//            case 'prod':
//                path = './app/config/prod.json';
//                break;
//            default:
//                console.log('incorrect env value('+argv.env+'). using --env=local as default configuration');
//                break;
//        }
//    }
//    gulp.src(path)
//        .pipe(gulpNgConfig('app', {
//            createModule: false,
////			parser: 'yml',
//            pretty: true
//        }))
//        .pipe(rename('config.env.js'))
//        .pipe(gulp.dest('./app/js'));
//});

//// 检查脚本
//gulp.task('lint', function() {
//    gulp.src('./app/*.js')
//        .pipe(jshint())
//        .pipe(jshint.reporter('default'));
//});

//TODO 加入dist打包, CDN 准备&发布

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

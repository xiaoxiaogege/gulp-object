var gulp = require("gulp");
var config = require('./gulpConfig');
var clean = require('gulp-clean');		//清除dist目录
var babel = require("gulp-babel");    // 用于ES6转化ES5
var uglify = require('gulp-uglify'); // 用于压缩 JS
var minifyCss = require("gulp-minify-css"); //用于压缩CSS
var minifyHtml = require("gulp-minify-html"); //用于压缩html
var imagemin = require('gulp-imagemin'); //图片压缩插件
var cache = require('gulp-cache');  //只压缩修改的图片。压缩图片时比较耗时，在很多情况下我们只修改了某些图片
var assetRev = require('gulp-asset-rev'); //添加版本号，避免浏览器缓存

//新增打包之前clear dist目录的任务
gulp.task('clean',function(){
	return gulp.src(config.clean.src)
	.pipe(clean());
})


//压缩JS，先用babel将es6文件编译成es5，然后用uglify压缩JS
gulp.task('es2015',function(){
    return gulp.src(config.js.src)
        .pipe(assetRev())
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest(config.js.dest));
})

//对指定的目录不做编译，但需要打包到dist
gulp.task('copyVendor',function(){
    return gulp.src(config.vendor.src)
	.pipe(gulp.dest(config.vendor.dest));
})


//压缩css
gulp.task('minCss',function(){
    return gulp.src(config.css.src)
        .pipe(assetRev())
        .pipe(minifyCss())
        .pipe(gulp.dest(config.css.dest));
})

//编译less   gulp-less
//编译sass   gulp-sass
gulp.task('compile-less', function () {
    gulp.src(config.less.src)
    .pipe(less())
    .pipe(gulp.dest(config.less.dest));
});

//压缩html
gulp.task('minHtml',function(){
    return gulp.src(config.html.src)
        .pipe(assetRev())
        .pipe(minifyHtml())
        .pipe(gulp.dest(config.html.dest));
})

//压缩图片
gulp.task('minImages',function(){
    return gulp.src(config.images.src)
        .pipe(cache(imagemin({
            progressive: true
            })))
        .pipe(gulp.dest(config.images.dest));
})



gulp.task('default',['clean'],function(){
    console.log('default clean finish')
    gulp.start('es2015','copyVendor','minCss','minHtml','minImages')
})
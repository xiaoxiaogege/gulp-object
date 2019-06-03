# gulp-object
this myself test

gulp-load-plugins   //自动加载插件

gulp-rename    //重命名

gulp-clean		  //清除dist目录

gulp-babel        // 用于ES6转化ES5

gulp-uglify       // 用于压缩 JS

gulp-minify-css   //用于压缩CSS

gulp-minify-html  //用于压缩html

gulp-imagemin   //图片压缩,压缩jpg、png、gif等图片
	gulp-imagemin的使用比较复杂一点,而且它本身也有很多插件，默认插件具有良好的默认值，在大多数情况下应该足够了。
	多看文档:https://github.com/sindresorhus/gulp-imagemin
		.pipe(imagemin({
            optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
        }))

gulp-concat   //文件合并

gulp-less  /  gulp-sass    //less和sass的编译

gulp-assets-rev    //自动化打包及静态文件自动添加版本号

	默认是文件名_MD5算法，如果我们需要不同格式，比如 index.js?v=8f204d4 ,则需要将node_modules --> gulp-assets-rev -->index.js 修改为：
		var verStr = (options.verConnecter || "") + md5;
		src=src+"?v="+verStr;
		
	实际上MD5人家都已经算好了，最后只是拼凑了显示方式，所以我们可以按照自己的需求去组合就行了。


const src = './src'; //配置输入路径
const dest = './src/dist'; //配置输出路径

module.exports = {
    css:{
        src: [src + "/**/*.css"],
        dest: dest
    },
    less:{
        src: [src + "/**/*.less"],
        dest: dest
    },
    js:{
        src: [src + "/**/*.js"],
        dest: dest
    },
    images:{
        src: [src + '/**/*.jpg',src + '/**/*.png',src + '/**/*.gif'],
        dest: dest
    },
    html:{
        src: [src + "/**/*.html"],
        dest: dest
    },
    clean:{
		src: dest
	}
}
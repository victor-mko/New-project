var gulp = require ('gulp'),
	sass = require ('gulp-sass'),
	cssnano = require ('gulp-cssnano'),
	rename = require ('gulp-rename'),
	del = require ('del'),
	pngquant = require ('imagemin-pngquant'),
	imagemin = require ('gulp-imagemin'),
	autoprefixer = require ('gulp-autoprefixer'),
	cache = require ('gulp-cache'),
	watch = require ('gulp-watch'),
	concat = require ('gulp-concat'), //конкатинирует (собирает) все наши js файлы
	uglifyjs = require ('gulp-uglifyjs'),
	browserSync = require('browser-sync') //плагин для автоматической перезагрузки индекса HTML во всех браузерах
	;


gulp.task('sass', function(){
	return gulp.src('app/scss/**/*.scss') //выбираем все файлы с нужным расширением во всех вложенных директориях 
	.pipe(sass())
	.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
	.pipe(gulp.dest('app/css')) //указываем путь куда будут скомпилированны файлы (не указываем имя файла, так как вместо файла будет создана папка)
	.pipe(browserSync.reload({stream: true})) //инжектит изменения в стилях в дом дереве 

});

gulp.task('scripts', function(){
	return gulp.src([
			'app/libs/jquery/dist/jquery.min.js',
			'app/libs/magnific-popup/dist/jquery.magnific-popup.min.js',
			])
	.pipe(concat('libs.min.js')) //создаёт минифицированный файл наших библиотек
	.pipe(uglifyjs()) // далее запускаем минификацию нашего собранного js файла
	.pipe(gulp.dest('app/js')) // указываем путь куда мы выгружаем собранный и сжатый файл
});

gulp.task('css-libs', ['sass'], function(){
	return gulp.src('app/css/libs.css')
	.pipe(cssnano())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('app/css'));
});

gulp.task('browser-sync', function(){
	browserSync({
		server: {
			baseDir: 'app' //указываем корневую директорию
		},
		notify: false //отключаем сообщения
	})
});

gulp.task('clean', function(){
	return del.sync('dist');
});


gulp.task('clear', function(){
	return cache.clearAll();
});


gulp.task('img', function(){
	return gulp.src('app/img/**/*')
	.pipe(cache(imagemin({
		interlaced: true,
		progressive: true,
		svgoPlugins: [{removeViewBox: false}],
		use: [pngquant()]
	})))
	.pipe(gulp.dest('dist/img'));
});





gulp.task('watch', ['browser-sync', 'css-libs', 'scripts', ], function(){ // всё что будет указанно в квадратных скобках - будет выполено до начала работы вотч
	gulp.watch('app/scss/**/*.scss', ['sass']); //выбираем путь к файлам за которыми наблюдаем, после чего в массиве прописываем таски 
	gulp.watch('app/**/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
});






gulp.task('build', ['clean', 'img', 'sass', 'scripts'], function(){

		var buildCss = gulp.src([
				'app/css/main.css',
				'app/css/libs.min.css',
			])
		.pipe(gulp.dest('dist/css'));

		var buildFonts = gulp.src('app/fonts/**/*')
		.pipe(gulp.dest('dist/fonts'));

		var buildJS = gulp.src('app/js/**/*')
		.pipe(gulp.dest('dist/js'));

		var buildHTML = gulp.src('app/*.html')
		.pipe(gulp.dest('dist'));

})
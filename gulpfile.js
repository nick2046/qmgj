var gulp = require('gulp'),
	less = require('gulp-less'),
	// cleanCss = require('gulp-clean-css');
	autoprefixer = require('gulp-autoprefixer'),
	concat = require('gulp-concat'),
	// uglify = require('gulp-uglify');
	connect = require('gulp-connect');

var rev = require('gulp-rev');
var inject = require('gulp-inject');
var clean = require('gulp-clean');
var sequence = require('gulp-sequence');

gulp.task('buildless',function(cd){
	return sequence('cleancss','less','rev','inject',cd)
});
gulp.task('buildjs',function(cd){
	return sequence('cleanjs','js','rev','inject',cd)
})
gulp.task('rev',function(){
	return gulp.src(['app/app.min.css','app/app.min.js'])
		.pipe( rev() )
		.pipe( gulp.dest('app/') )
		.pipe( rev.manifest() )
		.pipe( gulp.dest('app/') )
})

gulp.task('localhost',function(){
	return connect.server({
		root:"app/",
		port: 8090,
	})
})

gulp.task('cleancss',function(){
	return gulp.src(['app/app-*.min.css'])
		.pipe( clean() )
});
gulp.task('cleanjs',function(){
	return gulp.src(['app/app-*.min.js'])
		.pipe( clean() )
});
gulp.task('inject',function(){
	return gulp.src('app/home.html')
			   .pipe( inject( 
				   	gulp.src(['app/app-*.min.*']),
				   	{ignorePath: 'app/'} )
				)
			   .pipe( gulp.dest('app/') )
})

gulp.task('less',function(){
	// console.log('lesschange');
		console.log('lesschange');
	return gulp.src(['app/less/*.less','app/less/global.css'])
		.pipe( less() )
		.pipe(autoprefixer({
			browsers: [
			  "ie >= 8",
			  "ff >= 26",
			  "chrome >= 30",
			  "safari >= 6",
			  "opera >= 23"
			],
            cascade: true
		}))
		// .pipe( cleanCss() );
		.pipe( concat("app.min.css") )
		.pipe( gulp.dest("app/") )
});
gulp.task('js',function(){
	console.log('jschange')
	return gulp.src( ['app/controller/qmgj.js','app/controller/*Controller.js','app/config/home.js'] )
		// .pipe( uglify() )
		.pipe( concat("app.min.js") )
		.pipe( gulp.dest("app/") )
});
gulp.task('look',function(){
	gulp.watch('app/less/*.less',['buildless']);
	gulp.watch(['app/controller/*.js','app/config/home.js'],['buildjs']);
	// gulp.watch('app/less/*.less').on('change',function(){
	// 	console.log('less')
	// 	gulp.src('app/less/*.less')
	// 		.pipe( less() )
	// 		.pipe( gulp.dest('app/css/') )
	// })
});
gulp.task('default',['localhost','look'])



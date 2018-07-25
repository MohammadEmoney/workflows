var gulp = require('gulp'),
	gutil = require('gulp-util'),
	coffee = require('gulp-coffee');

var cofeeSources = ['components/coffee/tagline.coffee']

gulp.task('coffee', function(){
	gulp.src(cofeeSources)
		.pipe(coffee({bare:true})
			.on('error', gutil.log))
		.pipe(gulp.dest('components/scripts'))
});
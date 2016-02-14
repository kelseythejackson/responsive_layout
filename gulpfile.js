'use strict';

var gulp = require('gulp'),
    jade = require('gulp-jade'),
    sass = require('gulp-sass');


gulp.task('compileSass', function() {
  gulp.src('./scss/app.scss')
  .pipe(sass())
  .pipe(gulp.dest('./css'));
});
gulp.task('compileJade', function(){
  gulp.src('./jade/index.jade')
  .pipe(jade())
  .pipe(gulp.dest('.'));
});


gulp.task('watchFiles', function(){
  gulp.watch('scss/**/*.scss', ['compileSass']);
  gulp.watch('jade/**/*.jade', ['compileJade']);
});

gulp.task('serve', ['watchFiles']);

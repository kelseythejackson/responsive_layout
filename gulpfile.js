'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass');


gulp.task('compileSass', function() {
  gulp.src('./scss/styles.scss')
  .pipe(sass())
  .pipe(gulp.dest('./css'));
});


gulp.task('watchFiles', function(){
  gulp.watch('scss/**/*.scss', ['compileSass']);
});

gulp.task('serve', ['watchFiles']);

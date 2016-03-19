'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    maps = require('gulp-sourcemaps');


gulp.task('compileSass', function() {
  gulp.src('./scss/styles.scss')
  .pipe(maps.init())
  .pipe(sass())
  .pipe(maps.write('./'))
  .pipe(gulp.dest('./css'));
});


gulp.task('watchFiles', function(){
  gulp.watch('scss/**/*.scss', ['compileSass']);
});

gulp.task('serve', ['watchFiles']);

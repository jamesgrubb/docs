// core
var gulp = require('gulp');
var rename = require('gulp-rename');

// Javascript
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');

// SASS
var sass = require("gulp-sass");
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');

////////////////////////////////////////////////////////////////////////////////////////////////////
// Javascript minification
////////////////////////////////////////////////////////////////////////////////////////////////////
gulp.task('js', function() {
  return gulp.src('./themes/forestry-doc-theme/src/**/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter("default"))
  .pipe(rename({suffix: '.min'}))
  .pipe(uglify())
  .pipe(gulp.dest('./themes/forestry-doc-theme/static/js'));
});

////////////////////////////////////////////////////////////////////////////////////////////////////
// Build CSS
////////////////////////////////////////////////////////////////////////////////////////////////////
gulp.task('scss', function() {
  return gulp.src('./themes/forestry-doc-theme/src/**/*.scss')
  .pipe(sass({ style: 'expanded' }))
  .pipe(autoprefixer("last 2 version"))
  .pipe(rename({suffix: '.min'}))
  .pipe(minifycss())
  .pipe(gulp.dest('./themes/forestry-doc-theme/static/css'))
});

////////////////////////////////////////////////////////////////////////////////////////////////////
// watch for changes
////////////////////////////////////////////////////////////////////////////////////////////////////
gulp.task('watch', function() {
  gulp.watch('./themes/**/*.scss', ['scss']);
  gulp.watch('./themes/**/*.js', ['js']);
});

////////////////////////////////////////////////////////////////////////////////////////////////////
// Default task
////////////////////////////////////////////////////////////////////////////////////////////////////
gulp.task('default', ['scss', 'js', 'watch']);

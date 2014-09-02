var gulp = require('gulp')
,   jade = require('gulp-jade')
, stylus = require('gulp-stylus')
, prefix = require('gulp-autoprefixer');

gulp.task('default', function() {
  gulp.src('source/templates/*.jade')
    .pipe(jade({ pretty: true }))
    .pipe(gulp.dest('public'));

  gulp.src('source/styles/*.styl')
    .pipe(stylus({errors: true}))
    .pipe(prefix())
    .pipe(gulp.dest('public/styles'));

  gulp.src('source/scripts/**/*.js')
    .pipe(gulp.dest('public/scripts'));

  gulp.src('source/images/*')
    .pipe(gulp.dest('public/images'));

});

// rerun the task when a file changes
// gulp.task('watch', function () {
//   gulp.watch('source/templates/*.jade', ['default']);
//   gulp.watch('source/styles/*.styl', ['default']);
//   gulp.watch('source/scripts/*.js', ['default']);
//   gulp.watch('source/scripts/lib/*.js', ['default']);
// });
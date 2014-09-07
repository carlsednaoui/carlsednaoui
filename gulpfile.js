/**
imports
*/

var gulp = require('gulp');
var jade = require('gulp-jade');
var fs = require('fs');
var stylus = require('gulp-stylus');
var prefix = require('gulp-autoprefixer');


/**
gulp tasks list
*/

gulp.task('templates', function(){
  var POST_PATH = 'source/templates/posts';
  var files = fs.readdirSync(POST_PATH);
  var posts = [];
  files.forEach(function(el) {
    // remove the file extension
    var el = el.replace('.jade', '');
    var title = el.replace(/-/g, ' ');
    posts.push({ title: title, href: '/posts/' + el });
  })

  gulp.src('source/templates/{,posts}/*.jade')
    .pipe(jade({ pretty: true, locals: {posts: posts} }))
    .pipe(gulp.dest('public'));
});


gulp.task('styles', function() {
  gulp.src('source/styles/*.styl')
    .pipe(stylus({errors: true}))
    .pipe(prefix())
    .pipe(gulp.dest('public/styles'));
});


gulp.task('scripts', function() {
  gulp.src('source/scripts/**/*.js')
    .pipe(gulp.dest('public/scripts'));
});


gulp.task('images', function() {
  gulp.src('source/images/*')
    .pipe(gulp.dest('public/images'));
});


/**
gulp tasks used from cli
*/

gulp.task('default', ['templates', 'styles', 'scripts', 'images']);

gulp.task('watch', function () {
  gulp.watch('source/**/*', ['default']);
});

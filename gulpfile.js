/**
imports
*/

var fs     = require('fs');
var gulp   = require('gulp');
var jade   = require('gulp-jade');
var stylus = require('gulp-stylus');
var prefix = require('gulp-autoprefixer');
var config = require('npm-config');
var ENV = process.env.NODE_ENV || 'development';


/**
gulp tasks list
*/

gulp.task('content', function(){
  var POST_PATH = 'source/content/post';
  var files = fs.readdirSync(POST_PATH);
  var posts = [];
  files.forEach(function(folder) {

    // don't do this if you're looking at a file
    // e.g. index.jade
    if (fs.statSync(POST_PATH + '/' + folder).isFile()) return;

    // get legacy urls
    el = fs.readdirSync(POST_PATH + '/' + folder);

    // remove the file extension
    var el = el[0].replace('.jade', '');
    var title = el.replace(/-/g, ' ');
    posts.push({ title: title, href: '/post/' + folder + '/' + el });
  })

  // reverse chronological order
  posts.reverse();

  var locals = {};
  locals.posts = posts;
  locals.googleAnalyticsKey = config(ENV, 'googleAnalyticsKey');

  gulp.src('source/content/{,post/*}/*.jade')
    .pipe(jade({ pretty: true, locals: locals }))
    .pipe(gulp.dest('public'));

  gulp.src('source/content/post/*.jade')
    .pipe(jade({ pretty: true, locals: locals }))
    .pipe(gulp.dest('public/post'));
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
  gulp.src('source/images/**/*')
    .pipe(gulp.dest('public/images'));
});


/**
gulp tasks used from cli
*/

gulp.task('default', ['content', 'styles', 'scripts', 'images']);

gulp.task('watch', function () {
  gulp.watch('source/**/*', ['default']);
});

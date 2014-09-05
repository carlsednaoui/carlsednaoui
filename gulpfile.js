var gulp = require('gulp')
,   jade = require('gulp-jade')
,     fs = require('fs')
, stylus = require('gulp-stylus')
, prefix = require('gulp-autoprefixer');

gulp.task('default', function() {
  // get latest X posts
  var POST_PATH = 'source/templates/posts',
          files = fs.readdirSync(POST_PATH),
          posts = [];

  files.forEach(function(el) {
    // remove the file extension
    var el = el.replace('.jade', '');
    var title = el.replace(/-/g, ' ');
    posts.push({ title: title, href: '/posts/' + el });
  })

  gulp.src('source/templates/*.jade')
    .pipe(jade({ pretty: true, locals: {posts: posts} }))
    .pipe(gulp.dest('public'));

  gulp.src('source/templates/posts/*.jade')
    .pipe(jade({ pretty: true, locals: {posts: posts} }))
    .pipe(gulp.dest('public/posts'));

  gulp.src('source/styles/*.styl')
    .pipe(stylus({errors: true}))
    .pipe(prefix())
    .pipe(gulp.dest('public/styles'));

  gulp.src('source/scripts/**/*.js')
    .pipe(gulp.dest('public/scripts'));

  gulp.src('source/images/*')
    .pipe(gulp.dest('public/images'));

});

// rerun default task whenever a file changes
gulp.task('watch', function () {
  gulp.watch('source/templates/**/*.jade', ['default']);
  gulp.watch('source/styles/*.styl', ['default']);
  gulp.watch('source/scripts/**/*.js', ['default']);
});

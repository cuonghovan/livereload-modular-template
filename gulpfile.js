var gulp = require('gulp');
var bs = require('browser-sync').create();
var less = require('gulp-less');

gulp.task('browser-sync', function() {
  bs.init({
    server: {
      baseDir: "./",
      directory: true
    }
  });
});

gulp.task('less', function(){
  gulp.src('style/less/*.less')
      .pipe(less())
      .pipe(gulp.dest('style/css/'))
      .pipe(bs.stream());
});

gulp.task('watch', ['less','browser-sync'], function() {
  gulp.watch("style/less/*.less", ['less']);
  gulp.watch("**/*.html").on('change', bs.reload);
  gulp.watch("script/*.js").on('change', bs.reload);
});

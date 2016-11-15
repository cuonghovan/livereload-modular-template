var gulp = require('gulp');
var bs = require('browser-sync').create();
var less = require('gulp-less');

gulp.task('browser-sync', function() {
  bs.init({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task('less', function(){
  gulp.src('style/less/*.less')
      .pipe(less())
      .pipe(gulp.dest('style/css/'));
});

gulp.task('watch', ['browser-sync'], function() {
  gulp.watch("style/less/*.less", ['less']);
  gulp.watch("style/css/*.css").on('change', bs.reload);
  gulp.watch("**/*.html").on('change', bs.reload);
  gulp.watch("script/*.js").on('change', bs.reload);
});

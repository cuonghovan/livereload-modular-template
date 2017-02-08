var gulp = require('gulp');
var bs = require('browser-sync').create();
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

gulp.task('browser-sync', function() {
  bs.init({
    server: {
      baseDir: "./",
      directory: true
    }
  });
});

gulp.task('sass', function(){
  gulp.src('style/sass/main.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(postcss([autoprefixer()]))
      .pipe(gulp.dest('style/css/'))
      .pipe(bs.stream());
});

gulp.task('watch', ['sass','browser-sync'], function() {
  gulp.watch("style/sass/**/*.scss", ['sass']);
  gulp.watch("**/*.html").on('change', bs.reload);
  gulp.watch("script/*.js").on('change', bs.reload);
});

const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass',function(){
  return gulp.src('./src/assets/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/assets/stylesheets'));
});

gulp.task('default',['sass']);

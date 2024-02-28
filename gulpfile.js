const concat = require('gulp-concat');
const gulp=require('gulp');

 
gulp.task('scripts', function() {
  return gulp.src('./dist/angular-element-micro/*.js')
    .pipe(concat('micro-front-end-1.js'))
    .pipe(gulp.dest('./dist/angular-element-micro/'));
});
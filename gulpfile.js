var gulp = require('gulp');

var uglify = require('gulp-uglify');
 
gulp.task('compress', function() {
  gulp.src('dev/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('public/js'))
});

gulp.task('default', ['compress'])
var gulp = require('gulp'),
    less = require('gulp-less'),
    concat = require('gulp-concat');

gulp.task('less', function() {
    return gulp.src('less/*.less')
    .pipe(less({compress: false}))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('default', ['less']);
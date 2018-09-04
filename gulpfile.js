var gulp = require('gulp');
var sass = require('gulp-sass');
var minCss = require('gulp-clean-css');
//压缩css
gulp.task('minCss', function() {
    return gulp.src('./src/sass/*.scss')
        .pipe(sass())
        .pipe(minCss())
        .pipe(gulp.dest('./src/css'))
});
//监听sass变化
gulp.task('watch', function() {
    gulp.watch('./src/sass/*.scss', gulp.series('minCss'));
});
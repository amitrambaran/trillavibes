var gulp            = require('gulp'),
    autoprefixer    = require('autoprefixer'),
    postcss         = require('gulp-postcss');

gulp.task('autoprefixer', function () {
    return gulp.src('./app.css')
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest('css/'));
});

gulp.task('watch', function () {
    gulp.watch('app.css', gulp.series('autoprefixer'));
})
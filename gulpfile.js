var gulp = require('gulp'),
    template = require('gulp-template-html'), // html 模板插件
    connect = require('gulp-connect'); //内容自动刷新



//html
gulp.task('html', function () {
    return gulp.src('src/*.html')
        .pipe(template('src/temp/main-temp.html'))
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload());
});

gulp.task('js', function () {
    return gulp.src('dist/js/*.js')
        .pipe(connect.reload());
});

gulp.task('connect', function () {
    connect.server({
        root: 'dist',
        livereload: true,
        port: 8888
    });
});


gulp.task('watch', function () {
    gulp.watch(['src/*.html', 'src/temp/*.html'], ['html']);
    gulp.watch(['dist/js/*.js'],['js']);
});

gulp.task('default', ['html', 'watch', 'connect']);

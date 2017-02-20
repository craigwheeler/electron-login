var gulp = require('gulp'),
    jade = require('gulp-jade'),
    scss = require('gulp-sass'),
    $ = require('gulp-load-plugins')();

// create a TASK to compile Jade to HTML using gulp-jade
gulp.task('html', function () {
    gulp.src(['./*.pug'])
        .pipe($.jade({
            pretty: true,
            doctype: 'html'
        }))
        .pipe(gulp.dest(''));
});

// Sass Compiler
gulp.task('scss', function () {
    return gulp.src('scss/*.scss')
        .pipe(scss())
        .pipe(gulp.dest('css/'));
});

// Watch Files For Changes
gulp.task('watch', function () {
    gulp.watch('*.pug', ['html']);
    gulp.watch('scss/*.scss', ['scss']);

});

// default task
gulp.task('default', ['html', 'scss', 'watch']);

// run the cli below to install plugins
// npm install gulp-jade gulp-sass gulp-load-plugins --save-dev
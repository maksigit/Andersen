'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const mqpacker = require('css-mqpacker');

gulp.task('styles', function () {
    var proccesors = [
        autoprefixer({browsers: ['last 2 version']}),
        mqpacker(),
    ];
    return gulp.src('src/styles/all.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss(proccesors))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/styles'));
});
gulp.task('norm', function () {
    return gulp.src('src/styles/normalize.css')
        .pipe(gulp.dest('build/styles'));
});
gulp.task('scripts', function () {
    return gulp.src('src/scripts/*.js')
        .pipe(gulp.dest('build/scripts'));
});
gulp.task('img', function () {
    return gulp.src('src/images/*.*')
        .pipe(gulp.dest('build/images/'));
});
gulp.task('pug', function () {
    return gulp.src('src/index.pug')
        .pipe(pug())
        .pipe(gulp.dest('build/'));
});

gulp.task('build', gulp.series('pug', 'norm', 'styles', 'scripts', 'img'));

gulp.watch('src/styles/**/*.*', gulp.series('styles'));
gulp.watch('src/*.pug', gulp.series('pug'));
gulp.watch('src/scripts/**/*.*', gulp.series('scripts'));
gulp.watch('src/images/**', gulp.series('img'));

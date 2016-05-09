'use strict';

const gulp = require('gulp');
const rename = require('gulp-rename');
const flatten = require('gulp-flatten');
const i18next = require('i18next-parser');

gulp.task('default', () => gulp
    .src('src/**/*.js')
    .pipe(i18next({ locales: ['en', 'nl', 'fr']}))
    .pipe(rename((path) => {
        path.basename = path.basename.replace('translation', path.dirname);
    }))
    .pipe(flatten())
    .pipe(gulp.dest('i18n'))
);
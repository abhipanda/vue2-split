var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var less = require('gulp-less');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');

// Compile less
gulp.task('css', function () {
    return gulp.src('../src/styles/index.less')
        .pipe(less())
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions', 'ie > 8']
        }))
        .pipe(cleanCSS())
        .pipe(rename('vue-split.css'))
        .pipe(gulp.dest('../dist/styles'));
});

gulp.task('default', gulp.series('css'));

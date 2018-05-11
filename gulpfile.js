var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    browserSync = require('browser-sync');
    sourcemaps  = require('gulp-sourcemaps'),
    cleanCSS    = require('gulp-clean-css');
gulp.task('sass', function(){
    return gulp.src('./app/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(cleanCSS())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./app/css'))
        .pipe(browserSync.reload({stream: true}));
});
gulp.task('browserSync', function(){
    browserSync({
        server: {
            baseDir: './app/'
        }, 
        notify: false
    });
});
gulp.task('default', ['browserSync', 'sass'] , function() {
    // content
    gulp.watch('./app/scss/**/*.scss', ['sass']);
});

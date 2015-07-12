var gulp = require('gulp'),
    less = require('gulp-less'),
    browserSync = require('browser-sync').create();

// Static Server + watching less/html files
gulp.task('serve', ['less'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("less/*.less", ['less']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('less', function() {
   return gulp.src('less/*.less')
      .pipe(less())
      .pipe(gulp.dest('css'))
      .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
//png
gulp.task('png', function () {
  gulp.src('./src/*.png')
    .pipe($.spritesmith({
      imgName: 'icon.png',
      cssName: 'icon.css',
      cssTemplate: './src/png_template.hbs'
    }))
    .pipe(gulp.dest('dist/png'));
});
//字体图标
gulp.task('iconfont', function () {
  return gulp.src(['src/*.svg'])
    .pipe($.iconfontCss({
      fontName: 'iconfont',
	path: './src/font_template.css',
      cssClass: 'iconfont'
    }))
    .pipe($.iconfont({
      fontName: 'iconfont',
      formats: ['ttf', 'eot', 'woff', 'woff2', 'svg']
    }))
    .pipe(gulp.dest('dist/font'));
});
//svg
gulp.task('svg', function () {
  return gulp.src('./src/*.svg')
  .pipe($.svgSprite({
    mode: {
      symbol: {
        prefix: `.svg-`,
        dimensions: '%s',
        sprite: '../icon.svg',
        symbol: true,
        render: {
          css: {
            dest: '../icon.css'
          }
        }
      }
    }
  }))
  .pipe(gulp.dest('dist/svg'));
});
//html
gulp.task('html', function() {
	return gulp.src('./src/*.html')
		.pipe(gulp.dest('dist'));
});
gulp.task('default', ['png', 'iconfont', 'svg', 'html']);

const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const gulpif = require('gulp-if');
const gcmq = require('gulp-group-css-media-queries');
const del = require('del');
const browserSync = require('browser-sync').create();
const webpack = require('webpack-stream');
const imagemin = require('gulp-imagemin');

const conf = {
    dest: './build'
};
const isSync = (process.argv.indexOf('--sync') !== -1);
const isDev = (process.argv.indexOf('--dev') !== -1);

function html() {
    return gulp.src('./src/*.html')
                .pipe(gulp.dest(conf.dest))
                .pipe(gulpif(isSync, browserSync.stream()));
};

const cssFiles = [
    './src/css/normalize.css',
    './src/css/main.css'
];

function styles() {
    return gulp.src(cssFiles)
                .pipe(concat('style.css'))
                .pipe(gcmq())
                .pipe(autoprefixer({
                    cascade: false
                }))
                .pipe(cleanCSS({
                    level: 2
                }))
                .pipe(gulp.dest(conf.dest + '/css'))
                .pipe(gulpif(isSync, browserSync.stream()));
};

const webpackConf = {
    mode: isDev ? 'development' : 'production',
    output: {
        filename: 'index.js'
    },
    module: {
        rules: [
            {
              test: /\.m?js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env']
                }
              }
            }
          ]
    },
    devtool: isDev ? 'eval-source-map' : 'none'
};

function scripts() {
    return gulp.src('./src/js/**/*.js')
            .pipe(webpack(webpackConf))
            .pipe(gulp.dest(conf.dest + '/js'))
            .pipe(gulpif(isSync, browserSync.stream()));
};

function img() {
    return gulp.src('./src/img/**/*')
            /*.pipe(imagemin([
                imagemin.gifsicle({interlaced: true}),
                imagemin.mozjpeg({quality: 75, progressive: true}),
                imagemin.optipng({optimizationLevel: 5}),
                imagemin.svgo({
                    plugins: [
                        {removeViewBox: true},
                        {cleanupIDs: false}
                    ]
                })
            ]))*/
            .pipe(gulp.dest('./build/img/'));
};

function fonts() {
    return gulp.src('./src/fonts/**/*')
            .pipe(gulp.dest('./build/fonts/'));
};

function clear() {
    return del(conf.dest + '/*');
};

function watch() {
    if(isSync) {
        browserSync.init({
            server: {
                baseDir: conf.dest + '/'
            }
        });
    }
    gulp.watch('./src/js/**/*.js', scripts);
    gulp.watch('./src/css/**/*.css', styles);
    gulp.watch('./src/**/*.html', html);
};

const build = gulp.series(clear, gulp.parallel(html, styles, scripts, img, fonts)); // fonts
gulp.task('build', build);
gulp.task('watch', gulp.series(build, watch));
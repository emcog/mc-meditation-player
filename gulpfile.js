// gulp watch for buidling/testing/debugging
// gulp build to make distribution ready code
// gulp testBuild to run browserync server from dist directory



// -------> soures
// https://www.goede.site/setting-up-gulp-4-for-automatic-sass-compilation-and-css-injection

const gulp = require('gulp'),
	    sass = require('gulp-sass'),
      postcss = require("gulp-postcss"),
      autoprefixer = require("autoprefixer"),
      cssnano = require("cssnano"),
      sourcemaps = require("gulp-sourcemaps"),
      browserSync = require("browser-sync").create(),
      concat = require('gulp-concat'),
      rename = require('gulp-rename'),
      uglify = require('gulp-uglify'),
      browserify = require("browserify"),
      babelify = require("babelify"),
      source = require("vinyl-source-stream"),
      buffer = require("vinyl-buffer"),
      htmlmin = require("gulp-htmlmin"),
      del = require("del");



const paths = {
        source: "./src",
        build: "./dist",
};




// --------> Build

function serveBuild() {
  browserSync.init({
    server: {
            baseDir: "./dist",
        }
    });
} 


function cleanup() {
    return del([paths.build]);
}



function javascriptBuild() {
  return browserify({
    entries: [`${paths.source}/assets/scripts/main.js`,],
    debug: true,
    transform: [
      babelify.configure({
        presets: ["@babel/preset-env"]
      })
    ]
  })
    .bundle()
    .pipe(source("main.js"))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest(`${paths.build}/assets/scripts`));
}



function cssBuild() {
  return gulp
        .src(`${paths.source}/assets/styles/main.css`)
        .pipe(sass())
        .pipe(postcss([cssnano()]))
        .pipe(gulp.dest(`${paths.build}/assets/styles`));
}


  
function htmlBuild() {
    return gulp 
        .src(`${paths.source}/*.html`)
        .pipe(htmlmin())
        .pipe(gulp.dest(paths.build))
}




//  --------> Production

function style() {
    return (
        gulp
            .src(`${paths.source}/assets/styles/*.scss`)
            .pipe(sourcemaps.init()) // Initialize sourcemaps before compilation starts
            .pipe(sass()) // Use sass with the files found, and log any errors
            .on("error", sass.logError)
            .pipe(postcss([autoprefixer()]))
            .pipe(sourcemaps.write())// Now add/write the sourcemaps)		 
            .pipe(gulp.dest(`${paths.source}/assets/styles`))  // What is the destation for the compiled file?
            .pipe(browserSync.stream()) //must follow compilation
    );
}


	
function reload(done) { 
  browserSync.reload();
  done();
  }


function watch() {
	style();
	browserSync.init({
		server: {
            baseDir: "./src",
        }
    });
    gulp.watch(`${paths.source}/assets/**/*.scss`, style);
    gulp.watch(`${paths.source}/assets/**/*.js`, reload);
    gulp.watch(`${paths.source}/*.html`, reload);
}	
  
	
exports.style = style;
exports.watch = watch;
exports.build = gulp.series(cleanup, style, gulp.parallel(javascriptBuild, htmlBuild, cssBuild));
exports.serveBuild = serveBuild;

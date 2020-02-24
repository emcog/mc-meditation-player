// gulp watch for buidling/testing/debugging
// run gulp watch before gulp build – gulp watch compiless scss to css, gulp build minifies css and pipes to dist folder
// gulp build to make deployment ready code




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
        dest: "./dist",
        html: {
          src: "./src/*.html",
          dest: "./dist"
        },
        styles: {
		      src: "./src/assets/**/*.scss",
          compileTo: "./src/assets/styles/",
          minifyFrom: "./src/assets/styles/main.css",
          dest: "./dist/assets/styles"
	     },
        scripts: {
          src: "./src/assets/**/*.js",
          main: "./src/assets/scripts/main.js", 
          dest: "./dist/assets/scripts"
       }
};


// --------> Build

function cleanup() {
    return del([paths.dest]);
}



function javascriptBuild() {
  return browserify({
    entries: [paths.scripts.main],
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
    .pipe(gulp.dest(paths.scripts.dest));
}


// function cssBuild() {
//   return gulp
//         .src(paths.styles.minifyFrom)
//         .pipe(postcss([cssnano()]))
//         .pipe(gulp.dest(paths.styles.dest));
// }


function cssBuild() {
  return gulp
        .src(paths.styles.src)
        .pipe(sass())
        .pipe(postcss([cssnano()]))
        .pipe(gulp.dest(paths.styles.dest));
}


  
function htmlBuild() {
    return gulp 
        .src(paths.html.src)
        .pipe(htmlmin())
        .pipe(gulp.dest(paths.html.dest))
}





//  --------> Production

function style() {
    return (
        gulp
            .src(paths.styles.src)	
            .pipe(sourcemaps.init()) // Initialize sourcemaps before compilation starts
            .pipe(sass()) // Use sass with the files found, and log any errors
            .on("error", sass.logError)
            .pipe(postcss([autoprefixer(), cssnano()]))
            .pipe(sourcemaps.write())// Now add/write the sourcemaps)		 
            .pipe(gulp.dest(paths.styles.compileTo))  // What is the destation for the compiled file?
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
    gulp.watch(paths.styles.src, style);
    gulp.watch(paths.scripts.src, reload);
    gulp.watch(paths.html.src, reload);
}	
 




	
exports.style = style;
exports.watch = watch;
exports.build = gulp.series(cleanup, gulp.parallel(javascriptBuild, htmlBuild, cssBuild));
// exports.build = gulp.series(cleanup, gulp.parallel(javascriptBuild,));
// exports.build = javascriptBuild;

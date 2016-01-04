"use strict";

import gulp       from "gulp";
import browserify from "browserify"
import source     from "vinyl-source-stream"
import babel      from "gulp-babel"
import rename     from "gulp-rename"
import del        from "del"

const DESTINATION_DIR = "lib";

gulp.task("default", ["clean", "client", "server"]);

gulp.task("clean", () => {
  return del([
    'lib/**/*'
  ]);
});

gulp.task("server", () => {

  return gulp.src("src/server/app.js")
    .pipe(babel())
    .pipe(rename("server.js"))
    .pipe(gulp.dest(DESTINATION_DIR));

});

gulp.task("client", () => {

  return browserify("src/client/app.js")
    .transform("babelify")
    .bundle()
    .pipe(source("client.js"))
    .pipe(gulp.dest(DESTINATION_DIR));

});


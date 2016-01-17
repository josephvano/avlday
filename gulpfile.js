"use strict";

var gulp            = require("gulp");
var babel           = require("gulp-babel");
var rename          = require("gulp-rename");
var del             = require("del");
var webpackConfig   = require("./webpack.config");
var webpack         = require("webpack-stream");
var path            = require("path");

const paths = {
  CLIENT: "./src/client/app.js",
  BUILD:  "build",
  ASSETS: path.join("build", "assets"),
  LIB: "lib"
};

gulp.task("default", ["clean", "client", "server"]);

gulp.task("clean", () => {
  return del(['lib/**/*', 'build']);
});

gulp.task("client", () =>{
  return gulp
          .src(paths.CLIENT)
          .pipe(webpack(webpackConfig))
          .pipe(gulp.dest(paths.ASSETS));
});

gulp.task("server", () => {

  return gulp.src("src/server/app.js")
    .pipe(babel())
    .pipe(rename("server.js"))
    .pipe(gulp.dest(paths.LIB));

});


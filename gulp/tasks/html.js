import gulp from "gulp";

// Конфигурация
import path from "../config/path.js";
import app from "../config/app.js";

// Плагины
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import fileInclude from "gulp-file-include";
import size from "gulp-size";
import gulpif from "gulp-if";
import htmlmin from "gulp-htmlmin";
import webpHtml from "gulp-webp-html-nosvg-lv";

import replace from "gulp-replace";

// Обработка HTML
export default () => {
  return gulp
    .src(path.html.src)
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: "HTML",
          message: error.message,
        })),
      })
    )
    .pipe(fileInclude())
    .pipe(replace(/\..\/img/g, "img"))
    .pipe(webpHtml())
    .pipe(size({ title: "До сжатия" }))
    .pipe(gulpif(app.isProd, htmlmin(app.htmlmin)))
    .pipe(size({ title: "После сжатия" }))
    .pipe(gulp.dest(path.html.dest));
};

import gulp from "gulp";

// Конфигурация
import path from "../config/path.js";
import app from "../config/app.js";

// Плагины
import plumber from "gulp-plumber"
import notify from "gulp-notify"
import sassGlob from "gulp-sass-glob"
import webpCss from "gulp-webp-css"
import gulpif from "gulp-if"
import autoprefixer from "gulp-autoprefixer"
import shorthand from "gulp-shorthand"
import groupCssMediaQueries from "gulp-group-css-media-queries"
import size from "gulp-size"
import rename from "gulp-rename"
import csso from "gulp-csso"
import dartSass from "sass";
import gulpSass from "gulp-sass";

const sass = gulpSass(dartSass);

// Обработка SCSS
export default () => {

  return gulp.src(path.scss.src, { sourcemaps: app.isDev })
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: "SCSS",
          message: error.message,
        })),
      })
    )
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(webpCss())
    .pipe(gulpif(app.isProd, autoprefixer()))
    .pipe(shorthand())
    .pipe(groupCssMediaQueries())
    .pipe(size({ title: "style.css" }))
    .pipe(gulp.dest(path.scss.dest, { sourcemaps: app.isDev }))
    .pipe(rename({ suffix: ".min" }))
    .pipe(csso())
    .pipe(size({ title: "style.min.css" }))
    .pipe(gulp.dest(path.scss.dest, { sourcemaps: app.isDev }));
};

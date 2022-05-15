const { src, dest, watch, series } = require("gulp");

// Imagenes
const squoosh = require("gulp-libsquoosh");
const webp = require("gulp-webp");
const avif = require("gulp-avif");

function imagenes() {
  return src("img/**/*").pipe(squoosh()).pipe(dest("./img"));
}

function versionWebp() {
  const opciones = {
    quality: 50,
  };
  return src("img/**/*.{png,jpg}").pipe(webp(opciones)).pipe(dest("./img"));
}
function versionAvif() {
  const opciones = {
    quality: 50,
  };
  return src("img/**/*.{png,jpg}").pipe(avif(opciones)).pipe(dest("./img"));
}

function dev() {
  watch("img/**/*", imagenes);
}

exports.dev = dev;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.default = series(imagenes, versionWebp, versionAvif);

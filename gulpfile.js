var { src, dest, watch } = require('gulp');
var sass = require('gulp-sass')

function compileSass(){
    return src('scss/*.scss')
    .pipe(sass({ outputstyle: 'expanded'}))
    .pipe(dest('css'))
}

function watcher(){
    watch('scss/*.scss', compileSass)
}

exports.compileSass = compileSass
exports.default = watcher
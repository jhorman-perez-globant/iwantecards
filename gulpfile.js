/**
 * Created by Jhorman Perez on 30/10/2018.
 */

var gulp = require('gulp');
    usemin = require('gulp-usemin');
    cssmin = require('gulp-cssmin');
    rename = require('gulp-rename');
    minifyHTML = require('gulp-htmlmin');
    webserver = require('gulp-webserver');
    closureCompiler = require('gulp-closure-compiler');
    stylus = require('gulp-stylus');
    autopref = require('gulp-autoprefixer');
    psi = require('psi');
    webpack = require('webpack');
    gulpWebpack = require('gulp-webpack');
    plumber = require('gulp-plumber');


/*Ésta función se ejecuta cuando se desean generar los archivos finales HTML, CSS y JS minificados y unificados.*/
/*Los archivos resultantes, se almacenan en el directorio 'dist'.*/
gulp.task('build', ['comprimir-html', 'copiar']);


/*Ésta es la función por defecto definida. Inicializa las tareas webserver y watch.*/
gulp.task('default', ['watch']);

/*Tarea para identificar cambios en los archivos .styl y ejecutar otras tareas de Gulp.*/
gulp.task('watch', ['stylus-css'], function () {

    gulp.watch('app/src/styles/styl/*.styl', ['stylus-css']); //Ejecuta la compilación de Stylus.
    //gulp.watch('app/src/scripts/main.js', ['webpack-dev']); //Ejecuta la compilación de Webpack.
    //gulp.watch('app/src/scripts/components/**/*.jsx', ['webpack-dev']); //Ejecuta la compilación de Webpack.

});

/* Tarea para minificar los CSS. */
gulp.task('minificar-css', function () {
    gulp.src('./app/src/styles/**/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./assets'));
});


/*Tarea para comprimir/minificar los archivos HTML.*/
gulp.task('comprimir-html', ['comprimir-js'], function(){

    return gulp.src('dist/**/*.html')
        .pipe(minifyHTML({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'));

});

gulp.task('comprimir-js', function() {

    gulp.src('scripts/**/*.js')
        .pipe(closureCompiler({
            compilerPath: 'bower_components/closure-compiler/compiler.jar',
            fileName: 'main.js'
        }))

        .pipe(gulp.dest('dist/scripts'));
});


/*Tarea para inicializar un servidor local del proyecto durante el desarrollo.*/
gulp.task('webserver', function() {

    gulp.src('./')
        .pipe(webserver({
            livereload: true,
            directoryListing: true,
            open: true,
            host: '0.0.0.0',
            port: '8001'//Para poder accederlo desde la red local.
        }));
});

/* Webpack para producción. */
gulp.task('webpack-prod', function () {
    return gulp.src('./app/src/scripts/main')
        .pipe(gulpWebpack(require('./webpack.prod.config.js')))
        .pipe(gulp.dest('./app/src/scripts/bundles/'));
});


/*Tarea para compilar y comprimir los archivos de Stylus (.styl) en archivos CSS.*/
gulp.task('stylus-css', function() {

    gulp.src('app/src/styles/styl/app.main.styl')
        .pipe(plumber())
        .pipe(stylus({
            compress: false
        }))

        //Agrega los prefijos de CSS para los diferentes navegadores (según "CAN I USE")
        .pipe(autopref({
            browsers: ['last 3 versions'],
            cascade: false
        }))

        .pipe(gulp.dest('app/src/styles/css'));


    gulp.src('app/src/styles/helpers/**/*.styl')

        .pipe(stylus({
            compress: false
        }))

        //Agrega los prefijos de CSS para los diferentes navegadores (según "CAN I USE")
        .pipe(autopref({
            browsers: ['last 3 versions'],
            cascade: false
        }))

        .pipe(gulp.dest('styles/css'));

});


/*Tarea que copia los directorios de la fuente original (app) al directorio dist.*/
gulp.task('copiar', function() {

    gulp.src(['app/html/**/*'], {
        base: 'app'
    }).pipe(gulp.dest('dist'));

    gulp.src(['app/src/scripts/**/*.js'], {
        base: 'app/src/scripts'
    }).pipe(gulp.dest('dist/scripts'));

    gulp.src(['app/src/scripts/libs/**/*'], {
        base: 'app/src/scripts'
    }).pipe(gulp.dest('dist/scripts'));

    gulp.src(['app/src/styles/css/**/*'], {
        base: 'app/src/styles'
    }).pipe(gulp.dest('dist/styles'));

    gulp.src(['app/src/styles/libs/**/*'], {
        base: 'app/src/styles'
    }).pipe(gulp.dest('dist/styles'));

    gulp.src(['app/fonts/**/*', 'app/icons/**/*', 'app/images/**/*'], {
        base: 'app'
    }).pipe(gulp.dest('dist'));

});


/*Tarea que copia los directorios de la fuente original (app) al directorio dist
directamente SIN COMPRIMIR e ignorando los módulos de node y bower.*/
gulp.task('copiar-no-optimize', function() {

    gulp.src(['app/html/**/*'], {
        base: 'app'
    }).pipe(gulp.dest('dist'));

    gulp.src(['app/src/scripts/**/*.js'], {
        base: 'app/src/scripts'
    }).pipe(gulp.dest('dist/scripts'));

    gulp.src(['app/src/styles/css/**/*'], {
        base: 'app/src/styles'
    }).pipe(gulp.dest('dist/styles'));

});


/*Tarea para medir el rendimiento de la aplicación/sitio web, según PageSpeed Insights.*/
gulp.task('psi', function (cb) {

    var site = 'http://0.0.0.0:8000';

    psi({
        nokey: 'true', // or use key: ‘YOUR_API_KEY’
        url: site,
        strategy: 'mobile',
    }, cb);
});
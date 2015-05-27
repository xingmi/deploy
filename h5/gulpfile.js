var gulp = require('gulp');
var fileinclude = require('gulp-file-include');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var shell = require('gulp-shell');
var using = require('gulp-using');

var env = {
    production: "./dist"
};

// 启动web服务器
gulp.task('watch',function(){
    browserSync({server: {
        baseDir: "./"
    } }, function(err, bs) {
        // 监听资源变动
        // gulp.run("watchConfig")

    });
});


// 编译静态模板
gulp.task('compileHTML',function(){
    gulp.src(['./templates/**/*','!./templates/partial','!./templates/partial/**'])
        .pipe(fileinclude({
          prefix: '@@',
          basepath: '@file'
        }))
        .pipe(gulp.dest('./views'));
});

// 监听requireConfig变动
// gulp.task('watchConfig',function(){
//     gulp.watch(static.commonJs + 'config.js',function(){
//         gulp.src([static.libJs + 'require.js', static.libJs + 'underscore-min.js',static.libJs + 'zepto.js',static.commonJs + 'config.js'])
//             .pipe(concat('init.js'))
//             .pipe(uglify())
//             .pipe(gulp.dest(static.commonJs))
//         console.log("rebuild init.js is done")
//     });
// });

gulp.task('build',function(){
    gulp.run(['moveHTML','moveCss','moveFonts','moveImage','moveJS'],function(){
        console.log("=================================")
        console.log("========   build done   =========")
        console.log("=================================")
    })
})

gulp.task('moveHTML',function(){

});

gulp.task('moveCss',function(){
    gulp.src('./css/**/*')
        .pipe(using())
        .pipe(gulp.dest(env.production + '/css'))
});

gulp.task('moveFonts',function(){
    gulp.src('./fonts/**/*')
        .pipe(using())
        .pipe(gulp.dest(env.production + '/fonts'))
});

gulp.task('moveImage',function(){
    gulp.src('./img/**/*')
        .pipe(using())
        .pipe(gulp.dest(env.production + '/img'))
});

gulp.task('moveJS',shell.task(['node js/lib/r.js -o js/config/build.js']))
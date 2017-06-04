const gulp = require('gulp');
const ts = require('gulp-typescript');
const tslint = require('tslint');
const gulpTslint = require('gulp-tslint');
const del = require('del');

gulp.task('clean', () => {
  return del([
    'artifacts/**/*'
  ]);
});

gulp.task('ts:build', ['clean'], () => {
    const tsProject = ts.createProject('tsconfig.json', {});
    const lintProject = tslint.Linter.createProgram("tsconfig.json");

    return tsProject.src()
        .pipe(gulpTslint({
            formatter: 'verbose',
            program: lintProject
        }))
        .pipe(gulpTslint.report({
            emitError: false
        }))
        .pipe(tsProject())
        .js
        .pipe(gulp.dest('artifacts'))
        .on('error', function() {});
});

gulp.task('watch', ['ts:build'], () => {
    gulp.watch('src/**/*', ['ts:build']);
})

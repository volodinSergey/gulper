import gulp from 'gulp'
import fileInclude from 'gulp-file-include'
import browserSync from 'browser-sync'

const { src, dest } = gulp

export const handleHtml = () => src('./#src/**/*.html')
    .pipe(fileInclude())
    .pipe(dest('./build/'))
    .pipe(browserSync.stream())
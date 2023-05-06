import gulp from 'gulp'

import browserSync from 'browser-sync'
import rigger from 'gulp-rigger'

const { src, dest } = gulp

export const handleScripts = () => src('./#src/scripts/**/*.js')
    .pipe(rigger())
    .pipe(dest('build/scripts'))
    .pipe(browserSync.stream())
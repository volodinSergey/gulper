import gulp from 'gulp'

import authoprefixer from 'gulp-autoprefixer'
import concat from 'gulp-concat'

import dartSass from 'sass'
import gulpSass from 'gulp-sass'

import browserSync from 'browser-sync'

const { src, dest } = gulp
const scss = gulpSass(dartSass)

export const handleStyles = () => src('./#src/styles/main.scss')
    .pipe(authoprefixer({
        cascade: true,
        overrideBrowsersList: ['last 10 version']
    }))
    .pipe(concat('main.min.css'))
    .pipe(scss({ outputStyle: 'compressed' }))
    .pipe(dest('build/css'))
    .pipe(browserSync.stream())

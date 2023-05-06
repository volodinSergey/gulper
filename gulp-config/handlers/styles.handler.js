import gulp from 'gulp'

import authoprefixer from 'gulp-autoprefixer'
import concat from 'gulp-concat'

import dartSass from 'sass'
import gulpSass from 'gulp-sass'

import browserSync from 'browser-sync'

import { pathsConfig } from '../paths.config.js'


const { src, dest } = gulp
const scss = gulpSass(dartSass)

export const handleStyles = () => src(pathsConfig.src.styles)
    .pipe(authoprefixer({
        cascade: true,
        overrideBrowsersList: ['last 10 version']
    }))
    .pipe(concat('main.min.css'))
    .pipe(scss({ outputStyle: 'compressed' }))
    .pipe(dest(pathsConfig.build.styles))
    .pipe(browserSync.stream())


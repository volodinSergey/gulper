import gulp from 'gulp'
import fileInclude from 'gulp-file-include'
import browserSync from 'browser-sync'
import replace from 'gulp-replace'

import { pathsConfig } from '../paths.config.js'

const { src, dest } = gulp

/**
 * @function handleHtml
 * @description Handler for html
 */
export const handleHtml = () => src(pathsConfig.src.html)
    .pipe(fileInclude())
    .pipe(replace(/@images\//g, 'images/'))
    .pipe(dest(pathsConfig.build.html))
    .pipe(browserSync.stream())
import gulp from 'gulp'
import fileInclude from 'gulp-file-include'
import browserSync from 'browser-sync'

import { pathsConfig } from '../paths.config.js'

const { src, dest } = gulp

export const handleHtml = () => src(pathsConfig.src.html)
    .pipe(fileInclude())
    .pipe(dest(pathsConfig.build.html))
    .pipe(browserSync.stream())
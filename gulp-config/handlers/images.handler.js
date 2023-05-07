import gulp from 'gulp'
import browserSync from 'browser-sync'

import { pathsConfig } from '../paths.config.js'

const { src, dest } = gulp

export const handleImages = () => src(pathsConfig.src.images)
    .pipe(dest(pathsConfig.build.images))
    .pipe(browserSync.stream())
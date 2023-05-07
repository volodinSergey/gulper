import gulp from 'gulp'

import browserSync from 'browser-sync'
import rigger from 'gulp-rigger'
import { pathsConfig } from '../paths.config.js'

const { src, dest } = gulp

/**
 * @function handleScripts
 * @description Handler for scripts
 */
export const handleScripts = () => src(pathsConfig.src.scripts)
    .pipe(rigger())
    .pipe(dest(pathsConfig.build.scripts))
    .pipe(browserSync.stream())
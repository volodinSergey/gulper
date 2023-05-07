import gulp from 'gulp'
import clean from 'gulp-clean'

import { buildFolder } from '../paths.config.js'

const { src } = gulp

/**
 * @function handleCleanBuildFolder
 * @description Handler for cleaning build folder before main handlers stream
 */
export const handleCleanBuildFolder = () => src(buildFolder).pipe(clean())
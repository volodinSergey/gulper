import gulp from 'gulp'
import clean from 'gulp-clean'

import { buildFolder } from '../paths.config.js'

const { src } = gulp

export const handleCleanBuildFolder = () => src(buildFolder).pipe(clean())
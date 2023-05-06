import gulp from 'gulp'
import handlers from './gulp-config/handlers/index.js'

const { src } = gulp

const { cleanBuildFolder, handleHtml } = handlers
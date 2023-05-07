import gulp from 'gulp'

import handlers from './gulp-config/handlers/index.js'

import browserSync from 'browser-sync'

import { pathsConfig } from './gulp-config/paths.config.js'
import { browsersyncPlugin } from './gulp-config/plugins.config.js'

const { watch, series, parallel } = gulp

const {
    handleCleanBuildFolder,
    handleHtml,
    handleStyles,
    handleScripts,
    handleImages
} = handlers

/**
 * @function handleBrowserSync
 * @description Activates browsersync 
 */
const handleBrowserSync = () => browserSync.init(browsersyncPlugin)

/**
 * @function handleWatching
 * @description Watches paths and uses handlers something changes 
 */
const handleWatching = () => {
    watch([pathsConfig.watching.html], handleHtml)
    watch([pathsConfig.watching.styles], handleStyles)
    watch([pathsConfig.watching.scripts], handleScripts)
    watch([pathsConfig.watching.images], handleImages)
}

const parallelStream = parallel(
    handleHtml,
    handleStyles,
    handleScripts,
    handleImages,
    handleWatching,
    handleBrowserSync
)

const mainStream = series(handleCleanBuildFolder, parallelStream)

export default mainStream
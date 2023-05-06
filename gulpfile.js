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
    handleScripts
} = handlers

const handleBrowserSync = () => browserSync.init(browsersyncPlugin)

const handleWatching = () => {
    watch([pathsConfig.watching.html], handleHtml)
    watch([pathsConfig.watching.styles], handleStyles)
    watch([pathsConfig.watching.scripts], handleScripts)
}

const parallelStream = parallel(
    handleHtml,
    handleStyles,
    handleScripts,
    handleWatching,
    handleBrowserSync
)

const mainStream = series(handleCleanBuildFolder, parallelStream)

export default mainStream
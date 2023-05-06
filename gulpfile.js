import gulp from 'gulp'
import handlers from './gulp-config/handlers/index.js'

import browserSync from 'browser-sync'

const { src, watch, series, parallel } = gulp

const { handleCleanBuildFolder, handleHtml } = handlers

const handleBrowserSync = () => {
    browserSync.init({
        server: {
            baseDir: './build/'
        }
    })
}

const handleWatching = () => {
    watch(['./#src/**/*.html'], handleHtml)
}

const parallelStream = parallel(
    handleHtml,
    handleWatching,
    handleBrowserSync
)

const mainStream = series(handleCleanBuildFolder, parallelStream)

export default mainStream
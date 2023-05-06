import gulp from 'gulp'
import handlers from './gulp-config/handlers/index.js'

import browserSync from 'browser-sync'

const { watch, series, parallel } = gulp

const {
    handleCleanBuildFolder,
    handleHtml,
    handleStyles,
    handleScripts
} = handlers

const handleBrowserSync = () => {
    browserSync.init({
        server: {
            baseDir: './build/'
        }
    })
}

const handleWatching = () => {
    watch(['./#src/pages/*.html'], handleHtml)
    watch(['./#src/styles/**/*.scss'], handleStyles)
    watch(['./#src/scripts/**/*.js'], handleScripts)
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
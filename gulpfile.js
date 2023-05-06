import gulp from 'gulp'
import handlers from './gulp-config/handlers/index.js'

import browserSync from 'browser-sync'

const { src, series, parallel } = gulp

const { handleCleanBuildFolder, handleHtml } = handlers

const handleBrowserSync = () => {
    browserSync.init({
        server: {
            baseDir: './build/'
        }
    })
}

const parallelStream = parallel(handleHtml, handleBrowserSync)

const mainStream = series(handleCleanBuildFolder, parallelStream)

export default mainStream
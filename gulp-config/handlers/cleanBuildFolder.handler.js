import gulp from 'gulp'
import clean from 'gulp-clean'

const { src } = gulp

export const handleCleanBuildFolder = () => src('build').pipe(clean())
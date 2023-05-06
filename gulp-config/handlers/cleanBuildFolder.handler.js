import gulp from 'gulp'
import clean from 'gulp-clean'

const { src } = gulp

export const cleanBuildFolder = () => src('build').pipe(clean())
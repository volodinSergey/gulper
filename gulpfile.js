import clean from 'gulp-clean'
import gulp from 'gulp'

const { src } = gulp
const cleanBuildFolder = () => src('build').pipe(clean())

export { cleanBuildFolder }
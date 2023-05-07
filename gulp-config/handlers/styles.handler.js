import gulp from 'gulp'

import authoprefixer from 'gulp-autoprefixer'
import concat from 'gulp-concat'
import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import browserSync from 'browser-sync'

import { concatPlugin, scssPlugin, authoprefixerPlugin } from '../plugins.config.js'

import { pathsConfig } from '../paths.config.js'


const { src, dest } = gulp
const scss = gulpSass(dartSass)

export const handleStyles = () => src(pathsConfig.src.styles)
    .pipe(authoprefixer(authoprefixerPlugin))
    .pipe(concat(concatPlugin.concatedFileName))
    .pipe(scss(scssPlugin))
    .pipe(dest(pathsConfig.build.styles))
    .pipe(browserSync.stream())


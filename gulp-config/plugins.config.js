import { buildFolder } from "./paths.config.js"

const pluginsConfig = {
    concatPlugin: {
        concatedFileName: 'main.min.css'
    },

    scssPlugin: { outputStyle: 'compressed' },

    authoprefixerPlugin: {
        cascade: true,
        overrideBrowsersList: ['last 10 version']
    },

    browsersyncPlugin: {
        server: {
            baseDir: buildFolder
        }
    }
}

const {
    concatPlugin,
    scssPlugin,
    authoprefixerPlugin,
    browsersyncPlugin
} = pluginsConfig

export {
    concatPlugin,
    scssPlugin,
    authoprefixerPlugin,
    browsersyncPlugin
}
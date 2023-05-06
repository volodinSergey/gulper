const srcFolder = './#src'
export const buildFolder = './build'

export const pathsConfig = {
    src: {
        html: `${srcFolder}/**/*.html`,
        styles: `${srcFolder}/styles/main.scss`,
        scripts: `${srcFolder}/scripts/**/*.js`
    },

    build: {
        html: `${buildFolder}`,
        styles: `${buildFolder}/styles`,
        scripts: `${buildFolder}/scripts`
    },

    watching: {
        html: `${srcFolder}/*.html`,
        styles: `${srcFolder}/**/*.scss`,
        scripts: `${srcFolder}/**/*.js`
    }
}
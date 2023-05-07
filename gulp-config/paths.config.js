const srcFolder = './#src'
export const buildFolder = './build'

export const pathsConfig = {
    src: {
        html: `${srcFolder}/**/*.html`,
        styles: `${srcFolder}/styles/main.scss`,
        scripts: `${srcFolder}/scripts/**/*.js`,
        images: `${srcFolder}/images/*.*`
    },

    build: {
        html: `${buildFolder}`,
        styles: `${buildFolder}/styles`,
        scripts: `${buildFolder}/scripts`,
        images: `${buildFolder}/images`
    },

    watching: {
        html: `${srcFolder}/*.html`,
        styles: `${srcFolder}/**/*.scss`,
        scripts: `${srcFolder}/**/*.js`,
        images: `${srcFolder}/images/*.*`
    }
}
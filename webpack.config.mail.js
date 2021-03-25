const Encore = require('@symfony/webpack-encore');
const MjmlPlugin = require('tde-webpack-mjml-plugin');

Encore.reset();

Encore
    .setOutputPath('public/build/mail/')
    .setPublicPath('/build/mail')
    .addEntry('main', './assets/mail/js/main.js')
    .disableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .copyFiles({
        from: './assets/mail/img',
        to: 'img/[path][name].[ext]'
    })
    .addPlugin(
        new MjmlPlugin('assets/mail/mjml/layouts', {
            extension: '.twig',
            outputPath: 'templates/mail'
        })
    )
;

let config = Encore.getWebpackConfig();
config.name = 'mail';

module.exports = config;

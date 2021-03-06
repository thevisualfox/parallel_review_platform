var Encore = require('@symfony/webpack-encore');
const SpriteLoaderPlugin = require("svg-sprite-loader/plugin");
const StyleLintPlugin = require("stylelint-webpack-plugin");

if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

const path = require("path");

Encore.reset();

Encore
    .setOutputPath("public/build/app/")
    .setPublicPath("/build/app")
    .addEntry("main", "./assets/app/js/main.js")
    .disableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .splitEntryChunks()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .enableSassLoader(() => {}, {
        resolveUrlLoader: false,
    })
    .enablePostCssLoader()
    .enableReactPreset()
    .autoProvidejQuery()
    .disableImagesLoader()
    .configureFilenames({
        fonts: Encore.isProduction() ? "fonts/[name].[contenthash:8].[ext]" : "fonts/[name].[ext]",
    })
    .configureManifestPlugin()
    .copyFiles([
        {
            from: "./assets/app/img",
            to: Encore.isProduction() ? "img/[name].[contenthash:8].[ext]" : "img/[name].[ext]",
            pattern: /\.(png|svg|jpg|gif)$/,
        },
    ])
    .addLoader({
        test: /\.(png|jpg|jpeg|gif|ico|svg|webp)$/,
        loader: "file-loader",
        exclude: path.resolve(__dirname, "assets/app/symbols"),
        options: {
            name: Encore.isProduction() ? "img/[name].[contenthash:8].[ext]" : "img/[name].[ext]",
        },
    })
    .addLoader({
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
    })
    .addLoader({
        test: /\.svg$/,
        use: [
            {
                loader: "svg-sprite-loader",
                options: {
                    extract: true,
                    spriteFilename: Encore.isProduction() ? "img/symbols.[contenthash:8].svg" : "img/symbols.svg",
                },
            },
            "svgo-loader",
        ],
        include: path.resolve(__dirname, "assets/app/symbols"),
    })
    .addPlugin(
        new SpriteLoaderPlugin({
            plainSprite: true,
        })
    )
    .addPlugin(
        new StyleLintPlugin({
            files: "assets/app/**/*.s?(a|c)ss",
        })
    );

const config = Encore.getWebpackConfig();
config.resolve.alias = {
    ...config.resolve.alias,
    icons: path.resolve(__dirname, 'assets/app/img/icons'),
};


module.exports = config;

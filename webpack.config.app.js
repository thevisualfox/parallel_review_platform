const Encore = require("@symfony/webpack-encore");
const SpriteLoaderPlugin = require("svg-sprite-loader/plugin");
const StyleLintPlugin = require("stylelint-webpack-plugin");
const configureDevTools = require("./webpack.tools.dev");

const path = require("path");

Encore.reset();

Encore.setOutputPath("public/build/app/")
    .setPublicPath("/build/app")
    .addEntry("main", "./assets/app/js/main.js")
    .disableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
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
    .configureManifestPlugin((options) => {
        options.map = (file) => {
            // Remove contenthash from SVG sprite key
            if (/symbols\.[a-z0-9]*\.svg$/.test(file.name)) {
                file.name = file.name.replace(/\.[a-z0-9]*/, "");
            }

            return file;
        };
    })
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

let config = configureDevTools(Encore);
config.name = "app";

module.exports = config;

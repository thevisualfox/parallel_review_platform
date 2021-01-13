const configureDevTools = (Encore) => {
    const DashboardPlugin = require('webpack-dashboard/plugin');
    Encore.addPlugin(new DashboardPlugin());

    if (process.env.WEBPACK_DEV_TOOLS_NOTIFY === '1') {
        const WebpackNotifierPlugin = require('webpack-notifier');
        Encore.addPlugin(new WebpackNotifierPlugin());
    }

    let config = Encore.getWebpackConfig();
    if (process.env.WEBPACK_DEV_TOOLS_PROFILE === '1') {
        const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
        const smp = new SpeedMeasurePlugin();

        return smp.wrap(config);
    }

    return config;
};

module.exports = configureDevTools;

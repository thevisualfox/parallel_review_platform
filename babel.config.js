module.exports = (api) => {
    api.cache.using(() => process.env.NODE_ENV === 'development');

    return {
        presets: [
            '@babel/preset-env',
            '@babel/preset-react'
        ],
        plugins: [
            '@babel/plugin-proposal-class-properties'
        ]
    }
};

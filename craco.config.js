const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@text-color': '#fff',
                            '@body-background': '#000',
                            '@layout-body-background': '#000',
                            '@layout-header-background': '#000',
                            '@select-item-selected-bg': 'rgba(255, 255, 255, 0.08)'
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};
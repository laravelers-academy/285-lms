const mix = require('laravel-mix');
const path = require('path')

// CONFIG
    
    mix.webpackConfig({
        resolve: {
            alias: {
                '@app': path.resolve(__dirname, 'resources/vue'),
                '@js': path.resolve(__dirname, 'resources/js'),
                '@json': path.resolve(__dirname, 'resources/json'),
                '@router': path.resolve(__dirname, 'resources/vue/router'),
                '@layouts': path.resolve(__dirname, 'resources/vue/layouts'),
                '@views': path.resolve(__dirname, 'resources/vue/views'),
                '@forms': path.resolve(__dirname, 'resources/vue/forms'),
                '@components': path.resolve(__dirname, 'resources/vue/components'),
            }
        }
    });

// JS

    mix.js('resources/js/app.js', 'public/assets/js').vue();

    mix.babel([
        'resources/plugins/uikit/js/uikit.js',
        'resources/plugins/uikit/js/uikit-icons.js',
        'resources/plugins/jsvalidator/jsvalidator.js',
    ], 'public/assets/js/script.js');

    mix.styles([
        'resources/plugins/uikit/css/uikit.css',
        'resources/plugins/jsvalidator/jsvalidator.css',
    ], 'public/assets/css/app.css');

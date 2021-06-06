const mix = require('laravel-mix');
const path = require('path')

// CONFIG
    
    mix.webpackConfig({
        resolve: {
            alias: {
                '@app': path.resolve(__dirname, 'resources/vue'),
            }
        }
    });

// JS

    mix.js('resources/js/app.js', 'public/assets/js')
        .vue();

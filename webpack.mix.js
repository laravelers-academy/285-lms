const mix = require('laravel-mix');
const path = require('path')

// CONFIG
    
    mix.webpackConfig({
        resolve: {
            alias: {
                '@app': path.resolve(__dirname, 'resources/vue'),
                '@js': path.resolve(__dirname, 'resources/js'),
                '@json': path.resolve(__dirname, 'resources/json'),
            }
        }
    });

// JS

    mix.js('resources/js/app.js', 'public/assets/js')
        .vue();

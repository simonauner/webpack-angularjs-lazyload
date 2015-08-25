// Karma configuration
// Generated on Tue Aug 25 2015 21:12:13 GMT+0200 (CEST)
var path = require('path');
// var webpack = require('webpack');
// var webpackConf = require('./webpack.config.js');

// webpackConf.module.preloaders = webpackConf.module.preloaders || [];
// webpackConf.module.preloaders.push({
//     test: /\.js$/,
//     include: path.resolve('app/'),
//     loader: 'istanbul-instrumenter'
// });
// // delete webpackConf.entry;
// webpackConf.entry = './spec.index.js';

module.exports = function (config) {
    'use strict';
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        // files: ['app/**/*spec.js'],
        files: [
            './node_modules/phantomjs-polyfill/bind-polyfill.js',
            'spec.index.js'
        ],

        preprocessors: {
            'spec.index.js': ['webpack']
            // 'app/**/*spec.js': ['webpack']
        },

        webpack: {
            resolve: {
                modulesDirectories: [
                  'node_modules',
                  'vendor'
                ]
            },
            node: {
                fs: 'empty'
            },

            // Instrument code that isn't test or vendor code.
            module: {
                loaders: [
                  {
                      test: /\.html$/,
                      loader: 'html'
                  },
                  {
                      test: /\.scss$/,
                      loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
                  }
                ],
                postLoaders: [{
                    include: [
                      path.resolve(__dirname, 'app')
                    ],
                    test: /\.js$/,
                    exclude: /spec/,
                    loader: 'istanbul-instrumenter'
                }]
            }
        },

        // list of files / patterns to load in the browser
        // files: [
        //     './node_modules/phantomjs-polyfill/bind-polyfill.js',
        //     'spec.index.js'
        // ],

        // // list of files to exclude
        // exclude: [
        // ],

        // // preprocess matching files before serving them to the browser
        // // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        // preprocessors: {
        //     'spec.index.js': ['webpack']
        // },

        // webpack: webpackConf,

        webpackMiddleware: {
            // webpack-dev-middleware configuration
            // i. e.
            noInfo: true
        },

        plugin: [
            'karma-webpack',
            'karma-phantomjs-launcher',
            'karma-coverage-reporter'
        ],

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['dots', 'coverage'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,
        coverageReporter: {
            reporters: [{
                type: 'text'
            }]
        }
    });
};

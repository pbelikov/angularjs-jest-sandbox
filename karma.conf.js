module.exports = function(config) {
  config.set({
    frameworks: ['browserify', 'jasmine'],

    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'src/common.js',
      'src/karma-global.js',
      'src/app/**/*.js'
    ],

    preprocessors: {
      'src/common.js': [ 'browserify' ],
      'src/app/**/*.js': [ 'browserify' ]
    },

    browserify: {
      debug: true
    },

    browsers: [ 'ChromeHeadless' ],

    singleRun: true,

    //reporters: ['progress'],

    captureTimeout: 210000,
    browserDisconnectTolerance: 3,
    browserDisconnectTimeout : 210000,
    browserNoActivityTimeout : 210000,

// web server port
    port: 9876,


// enable / disable colors in the output (reporters and logs)
    colors: true,

    plugins: ['karma-chrome-launcher', 'karma-browserify', 'karma-jasmine']
  })
};
// Testacular configuration
// Generated on Fri Sep 07 2012 16:43:12 GMT+0200 (CEST)


// base path, that will be used to resolve files and exclude
basePath = './..';


// list of files / patterns to load in the browser
files = [
  JASMINE,
  JASMINE_ADAPTER,
  'lib/jquery-1.7.2.js',
  'lib/angular-1.0.2.js',
  'lib/underscore-1.3.3.js',
  'test/lib/angular/angular-mocks.js',
  'common.js',
  'services/*.js',
  'test/unit/services/*Spec.js'
];


// list of files to exclude
exclude = [

];


// test results reporter to use
// possible values: dots || progress
reporter = 'progress';


// web server port
port = 8080;


// cli runner port
runnerPort = 9100;


// enable / disable colors in the output (reporters and logs)
colors = true;


// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_DEBUG;


// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;


// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari
// - PhantomJS
browsers = ['Chrome'];


// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = false;

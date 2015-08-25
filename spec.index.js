// require all `test/components/**/index.js`
var testsContext = require.context('./app/', true, /\.js$/);

testsContext.keys().forEach(testsContext);

// require all `src/components/**/index.js`
// var componentsContext = require.context('./app/', true, /.*[^spec].js/);

// componentsContext.keys().forEach(componentsContext);

// keys.js - figure out what set of credentials to return
if (process.env.NODE_ENV === 'production') {
    // we're in production -return the prod set of keys
    module.exports = require('./prod');
} else {
    // we're in dev
    module.exports = require('./dev');
}
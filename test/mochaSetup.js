/*eslint-disable no-console */
console.log('-- running mocha setup');

console.log('-- setting up jsdom mock browser environment');

// Inject document, window and other DOM API into your Node.js environment.
// Useful for running, in Node.js, tests that are made for browsers.
require('jsdom-global')();

/*eslint-disable no-undef */
window.appConfig = {};
/*eslint-enable no-undef */

/*eslint-enable no-console */

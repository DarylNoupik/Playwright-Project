//cucumber js
let options = [
    '--require-module ts-node/register', //Load TypeScript module
    '--require ./steps/*.steps.ts', // Load step definitions
    '--format progress', //load custom formatter
    '--format json:./reports/cucumber_report.json',
].join(' ');

let run_features = [
    './features/', //Specify our feature files
    options,
].join(' ');

module.exports = {
    test_runner : run_features
}

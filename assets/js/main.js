/* Bowser Settings */
const browser = bowser.getParser(window.navigator.userAgent);
console.log(`The current browser name is "${browser.getBrowserName()}" & the version is "${browser.getBrowserVersion()}"`);

const fm = {
    'safari': '>=12',
    'chrome': '>=80',
    // Old Edge HTML 18.17763 = Edge 44
    'edge': '>=44',
    // New Edge
    'microsoft edge': '>=80',
    'internet explorer': '>=11'
};

const platform = browser.satisfies(fm);

if (!platform) {
    // Hide form
    document.getElementById('login-content').style.display = 'none';
    // Show error message and current browser and versions
    document.getElementById('browser-error').classList.remove('not-visible');
    document.getElementById('user-browser').innerHTML = `The current browser name is "${browser.getBrowserName()}" & the version is "${browser.getBrowserVersion()}"`
}

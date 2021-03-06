/* Bowser Settings */
const browser = bowser.getParser(window.navigator.userAgent);
console.log(`The current browser name is "${browser.getBrowserName()}" & the version is "${browser.getBrowserVersion()}"`);
console.log(browser)

const platform = browser.satisfies({
    'safari': '>=13',
    'chrome': '>=80',
    'microsoft edge': '>=80'
});

if (!platform) {
    // Hide form
    document.getElementById('login-content').style.display = 'none';
    // Show error message and current browser and versions
    document.getElementById('browser-error').classList.remove('not-visible');
    document.getElementById('user-browser').innerHTML = `The current browser name is "${browser.getBrowserName()}" & the version is "${browser.getBrowserVersion()}"`
}

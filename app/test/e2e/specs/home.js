// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'homepage tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementCount('nav', 1)
      .assert.elementPresent('#home')
      .assert.containsText('div', 'Home')
      .url(devServer + '/#/data')
      .waitForElementVisible('#app', 5000)
      .assert.elementCount('nav', 1)
      .assert.elementPresent('#data')
      .assert.containsText('div', 'Data')
      .end()
  }
}

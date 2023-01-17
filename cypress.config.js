const { defineConfig } = require('cypress')

module.exports = defineConfig({
  env: {
    login_url: 'http://localhost:3000/signin'
  },

  e2e: {
    setupNodeEvents (on, config) {
      // implement node event listeners here
    }
  }
})

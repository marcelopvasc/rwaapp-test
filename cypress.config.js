const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'nqf517',
  env: {
    login_url: 'http://localhost:3000/signin'
  },

  e2e: {
    setupNodeEvents (on, config) {
      // implement node event listeners here
    }
  }
})

// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')
//remove the uncaught exception
before(() => {
    Cypress.on('uncaught:exception', (e, page) => {
        console.log('Error', e)
        console.log('Error: page resources for / not found', page)
        if (e.message.includes('')) {
            return false
        }
    })
})
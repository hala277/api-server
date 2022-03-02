'use strict';
const logger = require('../src/middleware/logger.js');

describe('testing logger middleware', () => {
    let consoleSpy;
    let request = {};
    let response = {};
    let next = jest.fn();

    beforeEach(() => {
        // we did add mockImplementation() so we dont have to see the console.log
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    })

    afterEach(() => {
        // if i dont want to stop all the console,log
        consoleSpy.mockRestore()
    })

    it('test log', () => {
        logger(request, response, next);
       expect(consoleSpy).toHaveBeenCalled();
    })
    
    it ('test next', () => {
        logger(request, response, next);
       expect(next).toHaveBeenCalled();

    })
})
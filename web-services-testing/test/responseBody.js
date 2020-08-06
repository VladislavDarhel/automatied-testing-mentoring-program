const chai = require('chai');
const expect = chai.expect;
const sendRequest = require('../lib/sendRequest');

describe('Response Body', () => {
    let response;
    before(async () => {
        response = await sendRequest();
    });
    
    it('The content of the response body should be the array of 10 users', () => {
        expect(response.data).to.have.lengthOf(10);
    });
});
const chai = require('chai');
const expect = chai.expect;
const sendRequest = require('../lib/sendRequest');

describe('Response Header', () => {
    let response;
    before(async () => {
        response = await sendRequest();
    });
    
    it('The content-type header should be existed in response', () => {
        expect(response.headers).to.have.a.property('content-type');
    });

    it('The value of the content-type header should be application/json; charset=utf-8', () => {
        expect(response.headers).to.include({'content-type': 'application/json; charset=utf-8'});
    });
});
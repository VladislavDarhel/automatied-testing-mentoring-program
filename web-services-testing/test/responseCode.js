const chai = require('chai');
const expect = chai.expect;
const sendRequest = require('../lib/sendRequest');

describe('Response Status Code', () => {
    let response;
    before(async () => {
        response = await sendRequest();
    });
    
    it('Status code of response should be 200 OK', () => {
        expect(response.status).to.equal(200);
    });

});
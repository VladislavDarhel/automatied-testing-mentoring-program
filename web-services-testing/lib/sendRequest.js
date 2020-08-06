const axios = require('axios');

function sendRestRequest() {
    return axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
        return response;
    });

};

module.exports = sendRestRequest;
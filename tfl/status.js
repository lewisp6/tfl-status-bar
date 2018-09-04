const request = require('request');

let status = {
  getStatuses: function() {
    const statuses = request('https://api-neon.tfl.gov.uk/Line/Mode/tube/Status', (error, response, body) => {
        return response;
      });
    }
};

module.exports = status;

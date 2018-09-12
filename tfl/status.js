const rp = require('request-promise');

const options = {
  uri: 'https://api-neon.tfl.gov.uk/Line/Mode/tube/Status',
  json: true,
};


let status = {
  getStatuses: async () => {
    const results = await rp(options);
    return results;
  }
};

module.exports = status;

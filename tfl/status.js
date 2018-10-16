const rp = require('request-promise');

const options = {
  uri: 'https://api.tfl.gov.uk/Line/Mode/tube/Status',
  json: true,
};


const status = {
  getStatuses: async () => {
    const results = await rp(options);
    return results;
  }
};

module.exports = status;

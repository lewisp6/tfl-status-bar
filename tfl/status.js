const rp = require('request-promise');

const options = {
  uri: 'https://api-neon.tfl.gov.uk/Line/Mode/tube/Status',
  json: true,
};


let status = {
  getStatuses: () => {
    return rp(options);
  }
};

module.exports = status;

/* global $ */
const request = require('request');

$(() => {
  request(
    {
      url: 'https://api-neon.tfl.gov.uk/Line/Mode/tube/Status',
      json: true
    }, (error, response, body) => {
      body.forEach((element) => {
        $(`#${element.id}`).text(element.lineStatuses[0]['statusSeverityDescription']);
      });
  });
});

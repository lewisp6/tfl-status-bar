const R = require('ramda');
const status = require('./tfl/status');
const domWriter = require('./dom/domWriter');

document.addEventListener('DOMContentLoaded', function() {
  writeStatusesToDom();
});

window.addEventListener('focus', function() {
  writeStatusesToDom();
});

async function setTubeStatuses(tubeStatuses) {
  tubeStatuses.forEach((tubeLine) => {
    domWriter.writeDom(tubeLine.id, tubeLine.lineStatuses[0]['statusSeverityDescription']);
  });
}

const writeStatusesToDom = R.composeP(setTubeStatuses, status.getStatuses);

const status = require('./tfl/status');

document.addEventListener('DOMContentLoaded', function() {
  fetchTubeStatuses();
});

window.addEventListener('focus', function() {
  fetchTubeStatuses();
});

async function fetchTubeStatuses() {
  const tubeStatuses = await status.getStatuses();
  tubeStatuses.forEach((tubeLine) => {
    const element = document.getElementById(`${tubeLine.id}`);
    element.innerHTML = tubeLine.lineStatuses[0]['statusSeverityDescription'];
  });
}

const status = require('./tfl/status');

document.addEventListener('DOMContentLoaded', async function() {
  const tubeStatuses = await status.getStatuses();
  console.log('hello');
  tubeStatuses.forEach((tubeLine) => {
    const element = document.getElementById(`${tubeLine.id}`);
    element.innerHTML = tubeLine.lineStatuses[0]['statusSeverityDescription'];
  });
});

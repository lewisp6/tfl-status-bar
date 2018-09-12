const domWriter = {
  writeDom: (elementId, content) => {
    const element = document.getElementById(`${elementId}`);
    element.innerHTML = content;
  }
};

module.exports = domWriter;

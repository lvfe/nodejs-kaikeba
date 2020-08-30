module.exports = function (source) {
    return `const ele = document.createElement('style');
      ele.innerHTML = ${source};
      document.head.appendChild(ele);
    `;
  };
  
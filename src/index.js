(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var DEFAULT_OPTIONS = { from: '/', to: '/home', replace: true, history: null };
  var ERR_MSG = 'History is required!';

  nx.redirectTo = function (inOptions) {
    var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
    var pathname = nx.get(window, 'location.pathname');
    var action = options.replace ? 'replace' : 'push';
    !options.history && nx.error(ERR_MSG);
    pathname === options.from && options.history[action](options.to);
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.redirectTo;
  }
})();

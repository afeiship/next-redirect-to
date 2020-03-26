(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var DEFAULT_OPTIONS = { from: '/', to: '/home', replace: true, history: null };
  var ERR_MSG = 'History is required!';

  nx.redirectTo = function(inOptions) {
    var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
    var pathname = nx.get(window, 'location.pathname');
    var action = replace ? 'replace' : 'push';
    if (!options.history) {
      nx.error(ERR_MSG);
      return;
    }
    pathname === options.from && options.history[action](options.to);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.redirectTo;
  }
})();

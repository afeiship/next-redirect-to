/*!
 * name: @feizheng/next-redirect-to
 * description: Redirect to path.
 * url: https://github.com/afeiship/next-redirect-to
 * version: 1.0.1
 * date: 2020-03-26 16:31:52
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var DEFAULT_OPTIONS = { from: '/', to: '/home', replace: true };

  nx.redirectTo = function(inOptions) {
    var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
    var pathname = nx.get(window, 'location.pathname');
    if (pathname === options.from) {
      if (options.replace) {
        window.location.replace(options.to);
      } else {
        window.location.href = options.to;
      }
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.redirectTo;
  }
})();

//# sourceMappingURL=next-redirect-to.js.map

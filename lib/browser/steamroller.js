var protoclass = require("protoclass"),
superagent     = require("superagent");

require("head");

function Steamroller (options) {
  this.buildNumber          = options.buildNumber;
  this.bootstrapUrl         = options.bootstrapUrl;
  this.fallbackBootstrapUrl = options.fallbackBootstrapUrl;
}

protoclass(Steamroller, {
  load: function () {

    function onRes (err, res) {
      self._onConfig(res);
    }

    var self = this;
    superagent.
      get(self.bootstrapUrl).
      end(function (err, res) {
        if (err || res.status !== 200) return superagent.
          get(self.fallbackBootstrapUrl).
          end(onRes);
        onRes(null, res);
      });
  },
  _onConfig: function (res) {
    var bn = this.buildNumber;

    var pkg = res.body.body || res.body,
    body    = res.body;

    if (typeof pkg === "string") {
      pkg = JSON.parse(pkg);
    }

    head.load(pkg.load.map(function (relpath) {

      var url = (body.host || (window.location.protocol + "//" + window.location.host)) + "/" + relpath;


      if (url.substr(0, 4) !== "http") {
        url = window.location.protocol + "//" + url;
      }

      if (bn) {
        url += (~url.indexOf("?") ? "&" : "?") + encodeURIComponent(bn);
      }

      return url;
    }));
  }
})

module.exports = function (ops) {
  return new Steamroller(ops || {});
};

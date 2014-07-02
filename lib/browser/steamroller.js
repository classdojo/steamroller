var protoclass = require("protoclass"),
superagent     = require("superagent");

require("head");

function Steamroller (options) {
  this.buildNumber = options.buildNumber;
}

protoclass(Steamroller, {
  load: function (url) {
    var self = this;
    superagent.
      get(url).
      end(function (err, res) {
        self._onConfig(err, res);
      });
  },
  _onConfig: function (err, res) {
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

var protoclass = require("protoclass"),
superagent     = require("superagent");

require("head");

function Steamroller () {

}

Steamroller(Ludaroll, {
  load: function (url) {
    var self = this;
    superagent.
      get(url).
      end(function (err, res) {
        self._onConfig(err, res);
      });
  },
  _onConfig: function (err, res) {
    head.load(res.body.load);
  }
})

module.exports = function () {
  return new Steamroller();
};

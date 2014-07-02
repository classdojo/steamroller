var protoclass = require("protoclass"),
async          = require("async"),
superagent     = require("superagent"),
memoizee       = require("memoizee"),
toarray        = require("toarray"),
Url            = require("url");

function App (config, domain) {

  this.config       = config;
  this.domain       = domain;
  this.bootstrapUrl = config.bootstrapUrl;
  this.bootstrapUrlParts = Url.parse(this.bootstrapUrl || "");
  this.test         = domain.steamroller.testers.create(config.test);

  this.load      = memoizee(this.reload.bind(this), {
    async: true,
    maxAge: 1000
  });
}

protoclass(App, {
  reload: function (complete) {

    var self = this;

    superagent.get(this.bootstrapUrl).end(function (err, res) {
      if (err) return complete(err);
      var body = res.body;

      body.host = self.bootstrapUrlParts.protocol + "//" + self.bootstrapUrlParts.host;

      complete(null, body);
    });
  }
});

module.exports = App;

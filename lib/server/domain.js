var protoclass = require("protoclass"),
toarray        = require("toarray"),
App            = require("./app"),
comerr         = require("comerr");

function Domain (name, steamroller) {
  this.name        = name;
  this.steamroller = steamroller;
}

protoclass(Domain, {

  /**
   */

  apps: function (apps) {
    if (!arguments.length) return this._apps;
    var self = this;
    this._apps = toarray(apps).map(function (config) {
      return new App(config, self);
    })
  },

  /**
   */

  pick: function (options, complete) {

    for (var i = 0, n = this._apps.length; i < n; i++) {
      var app = this._apps[i];
      if (app.test(options)) return complete(null, app);
    }

    complete(comerr.notFound());
  },

  /**
   */

  bootstrap: function (options, complete) {
    this.pick(options, function (err, app) {
      if (err) return complete(err);
        app.load(complete);
    });
  }
});

module.exports = Domain;

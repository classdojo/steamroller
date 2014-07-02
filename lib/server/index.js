var protoclass = require("protoclass"),
testers        = require("./testers"),
Domain         = require("./domain");

function Steamroller () {
  this.testers  = testers();
  this._domains = {};
}


protoclass(Steamroller, {

  /**
   */

  use: function () {
    for (var i = 0, n = arguments.length; i < n; i++) {
      arguments[i](this);
    }
  },

  /**
   */

  tester: function (tester) {
    tersters.push(tester);
  },

  /**
   */

  domain: function (name) {
    var domain = this._domains[name] || (this._domains[name] = new Domain(name, this));
  }
})


module.exports = function () {
  return new Steamroller();
}

var protoclass = require("protoclass"),
testers        = require("./testers");

function Steamroller () {
  this.testers = testers();
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
    
  }
})


module.exports = function () {
  return new Steamroller();
}

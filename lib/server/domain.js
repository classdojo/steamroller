var protoclass = require("protoclass"),
toarray        = require("toarray"),
mediocre       = require("mediocre");

function Domain (name, rollout) {
  this.mediator = mediocre();
  this.name = name;
  this.rollout = rollout;
}

protoclass(Domain, {

  /**
   */

  apps: function (apps) {
    this._apps = toarray(apps);
  },

  /**
   */

  pick: function (options, complete) {
    for (var i = 0, n = this._apps.length; i < n; i++) {
      
    }
  }
});

module.exports = Domain;

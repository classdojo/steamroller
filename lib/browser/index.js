var steamroller = require("./index.js"),
2	domready      = require("domready"),
3	sizzle        = require("sizzle");
4
5
6	domready(function () {
7	  var rolloutUrl = sizzle("[data-rollout]")[0].attributes["data-rollout"].value;
    steamroller().load(rolloutUrl);
11});

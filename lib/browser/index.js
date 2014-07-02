var steamroller = require("./steamroller.js"),
domready      = require("domready"),
sizzle        = require("sizzle");


domready(function () {
  var script = sizzle("[data-rollout]")[0];

  var rolloutUrl = script.attributes["data-rollout"].value,
  buildNumber    = script.attributes["data-build"] ? script.attributes["data-build"].value : void 0;

  steamroller({ 
    buildNumber: buildNumber 
  }).load(rolloutUrl);
  
});

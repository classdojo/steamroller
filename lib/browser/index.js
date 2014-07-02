var steamroller = require("./steamroller.js"),
domready      = require("domready"),
sizzle        = require("sizzle");


domready(function () {
  var script = sizzle("[data-rollout]")[0];

  steamroller({ 
    buildNumber         : script.attributes["data-build"] ? script.attributes["data-build"].value : void 0,
    bootstrapUrl        : script.attributes["data-rollout"].value,
    fallbackBootstrapUrl: script.attributes["data-rollout-fallback"] ? script.attributes["data-rollout-fallback"].value : void 0
  }).load();
  
});

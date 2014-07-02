
Server Example:

```javascript
var steamroller = require("steamroller"),
express         = require("express");

var rollout = steamroller();


rollout.domain("teach.classdojo.com").apps([{
  test: [
    {
      percentage: {
        "ip": 10
      }
    }
  ],
  bootstrapUrl: "http://canary.domain.com/bootstrap.json"
}]).pick({
  ip: "50.403.20.1",
  user: {
    metadata: {
      sharing
    }
  }
}, function (err, bootstrap) {
  // loaded bootstrap content
});

```


Browser Example:


```javascript
var steamroller = require("steamroller");
steamroller.load("/bootstrap.json", function () {

});
```

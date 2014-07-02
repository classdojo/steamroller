
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
}])


rollout.domain("teach.classdojo.com").bootstrap({
  ip: "50.403.20.1",
  user: {
    metadata: {
      sharing
    }
  }
}, function (err, bootstrap) {
  // loaded bootstrap content
  res.end(bootstrap);
});

```


Browser Example:


```html
<script type="text/javascript" src="/js/steamroller.js" data-rollout="/bootstrap.json"></script>
```

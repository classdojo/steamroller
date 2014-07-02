var steamroller = require("../../.."),
expect = require("expect.js"),
superagent = require("superagent"),
sinon      = require("sinon");

describe("unit/basic#", function () {

  it("can create a new steamroller", function () {
    steamroller();
  });

  it("can use plugins", function () {
    var i = 0;
    steamroller().use(function (){
      i++;
    }, function () {
      expect(i).to.be(1);
      i++;
    });

    expect(i).to.be(2);
  });

  it("can create a domain", function () {
      steamroller().domain("teach.classdojo.com");
  });

  it("caches a domain", function () {
    var sr = steamroller();
    var domain = sr.domain("abc");
    domain.i = 1;
    expect(sr.domain("abc").i).to.be(1);
  })

  it("can register an app in the first arg of a domain", function () {
    var domain = steamroller().domain("teach.classdojo.com", {
      test: {}
    });

    expect(domain.apps().length).to.be(1);
  });

  it("can register multiple apps in the first arg of a domain", function () {
    var domain = steamroller().domain("teach.classdojo.com", [{
      test: {}
    }, { test: {} }]);

    expect(domain.apps().length).to.be(2);
  });

  it("can pick an application", function (next) {
    steamroller().domain("teach.classdojo.com", {
      name: "abba"
    }).pick({}, function (err, app) {
      expect(app.config.name).to.be("abba");
      next();
    });
  });

  it("properly loads a bootstrap url without any tests", function () {
    var stub = sinon.stub(superagent.Request.prototype, "end");
    stub.yields(null, {
      body: {
        load: [
          "js/app.js",
          "css/app.css"
        ]
      }
    });

    steamroller().domain("teach.classdojo.com", {
      name: "abba",
      bootstrapUrl: "http://sub.domain.com:8080"
    }).bootstrap({}, function (err, bootstrap) {
      expect(bootstrap.host).to.be("http://sub.domain.com:8080");
      expect(bootstrap.load[0]).to.be("js/app.js");
      expect(bootstrap.load[1]).to.be("css/app.css");
    });
    stub.restore();
  });


  it("can pick an app based on ip percentage", function () {

  });



});

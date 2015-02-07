/*** main.js ***/
define(function(require, exports, module) {
    var Engine = require('famous/core/Engine');

    var Utility = require('famous/utilities/Utility');

    // import the AppView class using require

    var AppView = require('views/AppView');

    var SlideData = require('data/SlideData');

    var mainContext = Engine.createContext();

    mainContext.setPerspective(1250);

    Utility.loadURL(SlideData.getUrl(), initApp);

    function initApp (data) {
      data = SlideData.parse(data);

      var appView = new AppView({data: data});

      mainContext.add(appView);
    }
});

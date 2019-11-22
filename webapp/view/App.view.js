sap.ui.jsview("vistex.statements.theme.ThemeDesigner.view.App", {
  getControllerName: function() {
    "use strict";
    return "vistex.statements.theme.ThemeDesigner.controller.App";
  },

  createContent: function(oController) {
    "use strict";

    var shell = new sap.m.Shell({
      app: [
        new sap.m.App("myApp", {
          initialPage: "page1",
          pages: [
            new sap.m.Page("page1", {
              title: "Hello World",
              showNavButton: false,
              content: [
                sap.ui.view({
                  viewName:
                    "vistex.statements.theme.ThemeDesigner.view.HelloPanel",
                  type: sap.ui.core.mvc.ViewType.JS
                })
              ]
            })
          ]
        })
      ]
    });
    return shell;
  }
});

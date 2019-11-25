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
              title: "{i18n>appTitle}",
              headerContent: [
                new sap.m.Button({
                  icon: "sap-icon://hello-world",
                  press: [oController.onOpenDialog, oController]
                })
              ],
              content: [
                sap.ui.view({
                  viewName:
                    "vistex.statements.theme.ThemeDesigner.view.HelloPanel",
                  type: sap.ui.core.mvc.ViewType.JS
                }),
                sap.ui.view({
                  viewName:
                    "vistex.statements.theme.ThemeDesigner.view.InvoiceList",
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

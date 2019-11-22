sap.ui.jsview("vistex.statements.theme.ThemeDesigner.view.HelloPanel", {
  getControllerName: function() {
    "use strict";
    return "vistex.statements.theme.ThemeDesigner.controller.HelloPanel";
  },

  createContent: function(oController) {
    "use strict";
    return new sap.m.Panel({
      headerText: "{i18n>helloPanelTitle}",
      width: "auto",
      content: [
        new sap.m.Button({
          id: "helloDialogButton",
          text: "{i18n>openDialogButtonText}",
          icon: "sap-icon://world",
          press: [oController.onOpenDialog, oController]
        }).addStyleClass("sapUiSmallMarginEnd"),
        new sap.m.Button({
          text: "{i18n>showHelloButtonText}",
          press: ".handlePress"
        }),
        new sap.m.Input({
          value: "{/recipient/name}",
          description: "Hello {/recipient/name}",
          valueLiveUpdate: true
        }),
        new sap.m.FormattedText({
          htmlText: "Hello {/recipient/name}"
        }).addStyleClass("sapUiSmallMargin")
      ]
    }).addStyleClass("sapUiResponsiveMargin");
  }
});

sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
  ],
  function(Controller, MessageToast, JSONModel) {
    "use strict";

    return Controller.extend(
      "vistex.statements.theme.ThemeDesigner.controller.App",
      {
        onInit: function() {
          var oData = {
            recipient: {
              name: "World"
            }
          };
          var oModel = new JSONModel(oData);
          this.getView().setModel(oModel);
        },
        handlePress: function() {
          MessageToast.show("Hello world");
        }
      }
    );
  }
);

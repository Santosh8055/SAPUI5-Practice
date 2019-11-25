sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast", "sap/ui/core/Fragment"],
  function(Controller, MessageToast, Fragment) {
    "use strict";

    return Controller.extend(
      "vistex.statements.theme.ThemeDesigner.controller.HelloPanel",
      {
        onInit: function() {},
        handlePress: function() {
          MessageToast.show("Hello world");
        },

        onOpenDialog: function() {
          this.getOwnerComponent().openHelloDialog();
        },
        onCloseDialog: function() {
          this.byId("helloDialog").close();
        }
      }
    );
  }
);

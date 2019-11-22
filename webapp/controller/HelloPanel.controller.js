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
          console.log(Controller);
          var oView = this.getView();

          // create dialog lazily
          if (!this.byId("helloDialog")) {
            Fragment.load({
              id: oView.getId(),
              name: "vistex.statements.theme.ThemeDesigner.view.HelloPanel",
              controller: this
            }).then(function(oDialog) {
              // connect dialog to the root view of this component (models, lifecycle)
              oView.addDependent(oDialog);
              oDialog.open();
            });
          } else {
            this.byId("helloDialog").open();
          }
        },
        onCloseDialog: function() {
          this.byId("helloDialog").close();
        }
      }
    );
  }
);

sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "vistex/statements/theme/ThemeDesigner/model/models",
    "./controller/HelloDialog.controller"
  ],
  function(UIComponent, models, HelloDialog) {
    "use strict";

    return UIComponent.extend(
      "vistex.statements.theme.ThemeDesigner.Component",
      {
        metadata: {
          manifest: "json"
        },

        /**
         * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
         * @public
         * @override
         */
        init: function() {
          // call the base component's init function
          UIComponent.prototype.init.apply(this, arguments);
          // enable routing
          this.getRouter().initialize();
          // set the device model
          this.setModel(models.createDeviceModel(), "device");
          // set dialog
          this._helloDialog = new HelloDialog(this.getRootControl());
        },
        exit: function() {
          this._helloDialog.destroy();
          delete this._helloDialog;
        },
        openHelloDialog: function() {
          this._helloDialog.open();
        }
      }
    );
  }
);

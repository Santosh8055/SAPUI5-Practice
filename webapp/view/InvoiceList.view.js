sap.ui.jsview("vistex.statements.theme.ThemeDesigner.view.InvoiceList", {
  getControllerName: function() {
    "use strict";
    return "vistex.statements.theme.ThemeDesigner.controller.App";
  },

  createContent: function() {
    "use strict";
    return new sap.m.List({
      headerText: "{i18n>invoiceListTitle}",
      width: "auto",
      items: {
        path: "{invoice>/Invoices}",
        template: new sap.m.ObjectListItem({
          title: "{invoice>ProductName}"
        })
      }
    });
  }
});

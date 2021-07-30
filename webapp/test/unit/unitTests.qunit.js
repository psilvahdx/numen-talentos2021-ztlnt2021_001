/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"numen/talentos/ztlnt2021001/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
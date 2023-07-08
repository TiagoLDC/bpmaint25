/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"bpmaint25/bpmaint25/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
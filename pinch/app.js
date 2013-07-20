Ext.application({
    name: 'Pinch',

    requires: [
        'Ext.MessageBox',
        'Pinch.view.ListCard',
        'Pinch.controller.Toolbar'
    ],

    controllers: [
        'Canvas',
        'Toolbar'
    ],
    
    views: [
        'Main',
        'Toolbar'
    ],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('Pinch.view.ListCard'));
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});

//Ext.define('Pinch.Application', {
//    name: 'Pinch',
//    extend: 'Deft.mvc.Application',

//    requires: [],

//    init: function () {     
//        Deft.Injector.configure({});

//        Ext.create('Pinch.view.ListCard');
//    }
//});
//Ext.define('Pinch.Application', {
//    name: 'Pinch',
//    extend: 'Deft.mvc.Application',

//    requires: [],

//    init: function () {     
//        //Deft.Injector.configure({
//        //    eventBus: {
//        //        fn: function () {
//        //            return Ext.create('Ext.util.Observable');
//        //        }
//        //    },
//        //});

//        Ext.create('Pinch.view.ListCard');
//    }
//});

//Ext.onReady(function() {
//    Ext.create('Pinch.Application');
//});

//Ext.Loader.setConfig({
//	enabled: true,
//	paths: {
//		"Pinch": "app",
//		"Ext": "../touch/src"
//	}
//});

//// Include dependent Sencha classes
//Ext.syncRequire(["Ext.Component", "Ext.ComponentManager", "Ext.ComponentQuery"]);
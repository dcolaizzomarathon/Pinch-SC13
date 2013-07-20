Ext.define('Pinch.view.ListCard', {
    extend: 'Ext.Container',
    xtype: 'listcard',

    requires: [
        'Pinch.view.Canvas',
        'Pinch.view.ChatList'
    ],

    config: {
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        items: [
            {
                xtype: 'pinchcanvas',
                itemId: 'canvasCtn',
                html: '<canvas id="canvasCtn"/>',
                flex: 2
            },
        {
            xtype: 'container',
            flex: 1,
            layout: {
                type: 'vbox',
                pack: 'center'
            },
            items: [
                {
                    xtype: 'segmentedbutton',
                    items:[
                        {
                            text:'Chat',
                            pressed: true
                        },
                        {
                            text:'Users'
                        }
                    ],
                    listeners: {
                        toggle: function(container, button, pressed) {
                            alert("User tried to view the '" + button.getText() + "' list.");
                        }
                    }
                },
                {
                    xtype: 'panel',
                    layout: 'card',
                    flex:1,
                    items: [
                        {
                            xtype: 'chatlist',
                        }
                    ]
                }
            ]
        },
            {
                docked: 'top',
                xtype: 'toolbar',
                title: 'Pinch',
                items: [
                    {
                        xtype: 'button',
                        itemId: 'attachments',
                        iconCls: 'add',
                        html: '<input type="file" id="fileInput" style="visibility:hidden;position:absolute;top:-50;left:-50"/>',
                        docked: 'right'
                    }
                ]
            }
        ],
    },
    initialize: function (config) {
        //this.chatPanel = Ext.create('Ext.Container', {
        //    config: {
        //        width: 100,
        //        items: [
        //            {
        //                xtype: 'userchatlist'
        //            }
        //        ],
        //        style: {
        //            backgroundColor: 'red',
        //        }
        //    }
        //});
        //this.add({
        //    xtype: 'container',
        //    width: 100,
        //    items: [
        //        {
        //            xtype: 'userchatlist'
        //        }
        //    ],
        //    style: {
        //        backgroundColor: 'yellow'
        //    }
        //});

        this.callParent(arguments);
    }
});
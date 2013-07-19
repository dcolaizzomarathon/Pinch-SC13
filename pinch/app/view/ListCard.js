Ext.define('Pinch.view.ListCard', {
    extend: 'Ext.Container',
    xtype: 'listcard',

    config: {
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        items: [
            {
                xtype: 'container',
                itemId: 'canvasCtn',
                html: 'Fullscreen test of whether or not it fills the screen',
                flex: 2,
                style: {
                    backgroundColor: 'blue'
                }
            },
        {
            xtype: 'container',
            flex: 1,
            layout: 'vbox',
            items: [
                {
                xtype: 'togglefield',
                name: 'awesome',
                label: 'Users/Comments',
            },
                {
                    xtype: 'userchatlist',
                    flex: 1,
                    style: {
                        backgroundColor: 'yellow'
                    }
                },
            
        ]
        },
            {
                docked: 'top',
                xtype: 'toolbar',
                title: 'Pinch',
                items:[
                    {
                        xtype: 'button',
                        itemId: 'attachments',
                        iconCls: 'add',
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
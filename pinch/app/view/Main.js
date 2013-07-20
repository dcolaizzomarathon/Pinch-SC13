Ext.define('Pinch.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    
    requires: [
        'Ext.TitleBar',
        'Pinch.view.ChatList',
        'Pinch.view.ListCard'
    ],
    
    config: {
        tabBarPosition: 'bottom',
        layout:'card',
        items: [
            {
                title: 'Pinch',
                iconCls: 'home',
                layout: {
                    type: 'hbox',
                },
                items: [
                    {
                        xtype: 'listcard',
                        flex:1
                    },
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Welcome to Sencha Touch 2'
                    },
                ]
            }
        ]
    }
});

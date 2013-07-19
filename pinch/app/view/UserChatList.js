Ext.define('Pinch.view.UserChatList', {
    extend: 'Ext.dataview.List',
    xtype: 'userchatlist',

    config: {
        itemTpl: '{title}',
        data: [
            { title: 'Item 1' },
            { title: 'Item 2' },
            { title: 'Item 3' },
            { title: 'Item 4' }
        ]
    }
})
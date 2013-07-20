Ext.define('Pinch.view.ChatList', {
    extend: 'Ext.dataview.List',
    xtype: 'chatlist',

    config: {
        itemTpl: '{username} : {message}',
        data: [
            { username: 'Doug' , message: "This is pretty cool"},
            { username: 'Dave', message: "Yea I know"},
            { username: 'Bob', message: "Look at this thing."},
            { username: 'Heater', message: "It does nothing" },
            { username: 'Doug' , message: "Upload a picture"},
        ]
    }
})
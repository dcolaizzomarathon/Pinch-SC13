Ext.define('Pinch.view.Canvas', {
    extend: 'Ext.draw.Surface',
    xtype: 'pinchcanvas',
    
    initialize: function(){
        var me = this;
        me.callParent(arguments);
        me.element.on('tap', 'onTap', me);
        me.element.on('doubletap', 'onDoubleTap', me);
    },
    
    onTap: function(e) {
        alert('Add point to x: ' + e.pageX + ' y:' + e.pageY);
    }
});
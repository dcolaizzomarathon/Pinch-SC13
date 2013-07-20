Ext.define('Pinch.controller.Canvas', {
    extend: 'Ext.app.Controller',
    
    config: {
        ref: {
            pinchCanvas: 'pinchcanvas'
        },
        control: {
            pinchCanvas: {
                tap: 'addPoint'
            }       
        }
    },
    
    addPoint: function(a,b,c){
        
    }
})
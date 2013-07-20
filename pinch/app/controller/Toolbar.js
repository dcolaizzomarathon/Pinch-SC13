Ext.define('Pinch.controller.Toolbar', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            attachments: 'toolbar #attachments'
        },
        control: {
            attachments: {
                tap: 'addPicture'
            }
        }
    },

    init: function () {
    },
    addPicture: function (button) {
        var me = this;
        
        var handleUpload = function (files) {
            var file = files.target.files[0];
            var reader = new FileReader();

            reader.onload = function (event) {
                var imageUrl = event.target.result;
                me.loadImageIntoCanvas(imageUrl);
            };
            reader.readAsDataURL(file);
        };
        var fileInput = document.getElementById("fileInput");
        fileInput.onchange = handleUpload;
        fileInput.click();
    },
    loadImageIntoCanvas: function (imageUrl) {
        debugger
        var image = new Image();
        var canvas = document.getElementById('canvasCtn');
        var context = canvas.getContext('2d');
        
        image.onload = Ext.bind(function (a,b,c) {
            debugger
            canvas.height = image.height;
            canvas.width = image.width;
            context.drawImage(image, 0, 0);
            
        },this);
        image.src = imageUrl;
    }
});



module.exports = {
    isEmpty: function isEmpty(value) {
        return typeof value == 'string' && !value.trim() || typeof value == 'undefined' || value === null;
    },
    debug:true,
 blankUrl:'http://demo.smartstore.com/backend/Media/Default/Thumbs/defa/default-image-100.png',
    
};
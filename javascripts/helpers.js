


module.exports = {
    isEmpty: function isEmpty(value) {
        return typeof value == 'string' && !value.trim() || typeof value == 'undefined' || value === null;
    },
    debug:true
};
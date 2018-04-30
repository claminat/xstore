var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var expenseSchema = new Schema({
	albumId: {
		type: 'Number'
	},
	id: {
		type: 'Number'
	},
	title: {
		type: 'String'
	},
	url: {
		type: 'String'
	},
	thumbnailUrl: {
		type: 'String'
	}
},{
	collection: 'photo'
});
module.exports = mongoose.model('Photo', expenseSchema);
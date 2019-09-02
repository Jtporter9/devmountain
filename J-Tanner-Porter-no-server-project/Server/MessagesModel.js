var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Messages = Schema({
	email: { type: String},
  subject: { type: String},
	message: { type: String}
});

module.exports = mongoose.model('Messages', Messages);

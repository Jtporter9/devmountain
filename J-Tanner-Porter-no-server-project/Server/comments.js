var Comment = require('./CommentsModel');

module.exports = {
	addComment: function (req, res) {
		var newComment = new Comment(req.body);
		newComment.save(function (err, result) {
			if (err) return res.status(500).send(err);
			else res.send(result);
		});
	},
	findComment: function (req, res, next) {
		Comment.find().then(function (Comment) {
			res.send(Comment);
		})
	},
	deleteComment: function (req, res, next) {
		Comment.findByIdAndRemove(req.params.id, req.body, function (err, deletedComment) {
			if (err) {
				res.status(500).send(err);
			} else {
				res.send(deletedComment);
			}
		});
	}
}

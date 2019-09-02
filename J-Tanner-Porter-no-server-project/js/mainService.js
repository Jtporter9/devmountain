angular.module('portfolioApp')

	.service('mainService', function () {
	var homeRef = new Firebase('https://jtannerporter.firebaseio.com/home');

		this.submitComment = function (comment) {
		  comments.unshift(comment);
		};

		this.getComments = function(){
			return comments;
		}

		this.submitEmail = function (email) {
			emails.unshift(email);
		}

		this.getEmails = function(){
			return emails;
		}

		//dummy data

		var emails = [{}];

		var comments = [
			{ name: 'Freddie Davis',
				email: 'fpdavis4@gmail.com',
				comment: 'This is pretty cool Tanner, congrats.',
				answer: "No"
			}
		];
	})

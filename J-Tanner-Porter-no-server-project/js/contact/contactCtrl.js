angular.module('portfolioApp')

	.controller('contactCtrl', function ($scope, mainService) {

		var homeRef = new Firebase('https://jtannerporter.firebaseio.com/home');

		$scope.pageTitle = "Contact Me"

		$scope.buttonEnabled = true;

		$scope.showQuestion = true;
		$scope.showForm = false;

		$scope.leaveComment = function () {
			$scope.showForm = true;
			$scope.showQuestion = false;
		}

		$scope.cancelComment = function () {
			$scope.email = "";
			$scope.subject = "";
			$scope.message = "";
			$scope.showQuestion = true;
			$scope.showForm = false;
		}
		$scope.closeSent = function () {
			$scope.messageSent = false;
			$scope.messageFailed = false;
		}
		$scope.submitComment = function () {
			var email = {};
			email.email = $scope.emailAddress;
			email.subject = $scope.subject;
			email.message = $scope.message;
			$scope.showQuestion = true;
			$scope.showForm = false;
			$scope.getEmails();
			$scope.emailAddress = "";
			$scope.subject = "";
			$scope.message = "";
			if (!email.email || !email.subject || !email.message) {
				$scope.messageFailed = true;
				$scope.messageFailedText = "Sorry please fill out all required fields";
			}
			//  if (email.email.indexOf("@") === -1) {
			// 	$scope.messageFailed2 = true;
			// 	$scope.messageFailedText2 = "Sorry please use an @ in your email, Thank you.";
			//  }
			else {
				$scope.messageSent = true;
				$scope.messageFailed = false;
				$scope.messageSent = "Thank you! Your message was sent.";
				mainService.submitEmail(email);
				console.log($scope.messageSent);
			}
		};
		$scope.getEmails = function () {
			$scope.emails = mainService.getEmails();
		}
		$scope.getEmails();
			
	})
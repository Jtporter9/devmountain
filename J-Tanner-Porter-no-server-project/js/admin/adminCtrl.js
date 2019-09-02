angular.module('portfolioApp')
	.controller('adminCtrl', function ($scope, mainService) {

		$scope.pageTitle = "Admin Section"

		$scope.getComments = function () {
			$scope.comments = mainService.getComments();
		}
		$scope.getComments();

		$scope.getEmails = function () {
			$scope.emails = mainService.getEmails();
		}
		$scope.getEmails();
		
		// deleteing/editing content
		$scope.deleteEmail = function (email) {
			$scope.emails.splice($scope.emails.indexOf(email), 1);
		};

		$scope.deleteComment = function (comment) {
			$scope.comments.splice($scope.comments.indexOf(comment), 1);
		};

		$scope.emailHoverDelete = function () {
			$scope.showDelete = true;
		}
		$scope.emailHoverLeave = function () {
			$scope.showDelete = false;
		}
		$scope.commentHoverDelete = function () {
			$scope.showDeleteComment = true;
		}
		$scope.commentHoverLeave = function () {
			$scope.showDeleteComment = false;
		}



	})
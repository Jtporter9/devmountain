angular.module('portfolioApp')

	.controller('homeCtrl', function ($scope) {

		var homeRef = new Firebase('https://jtannerporter.firebaseio.com/home');
		
		$scope.pageTitle = "J. Tanner Porter";
	})
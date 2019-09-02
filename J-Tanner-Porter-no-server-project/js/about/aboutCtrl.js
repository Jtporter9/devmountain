angular.module('portfolioApp')

.controller('aboutCtrl', function($scope){
	
		var homeRef = new Firebase('https://jtannerporter.firebaseio.com/home');
	
	$scope.pageTitle = "About Me";
})
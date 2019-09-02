angular.module('portfolioApp')


.directive('dirSocialMedia', function () {
		return {
			templateUrl: 'js/Directives/dirSocialMedia/dirSocialMedia.html',
			}
		})
	
.controller('dirSocialMedia', function($scope){
	
	var homeRef = new Firebase('https://jtannerporter.firebaseio.com/home');

	
})
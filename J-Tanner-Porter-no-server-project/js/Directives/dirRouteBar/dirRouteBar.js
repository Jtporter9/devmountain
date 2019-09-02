angular.module('portfolioApp')

.directive('dirRouteBar', function () {
		return {
			templateUrl: 'js/Directives/dirRouteBar/dirRouteBar.html',
			}
		})

.controller('dirRouteBar', function($scope){
	
	var homeRef = new Firebase('https://jtannerporter.firebaseio.com/home');

	
})
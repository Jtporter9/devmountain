angular.module('portfolioApp')

	.controller('welcomeCtrl', function ($scope) {
		
		$scope.toggleMenu = function(){
			$scope.showMenu = !$scope.showMenu;
		}

	})
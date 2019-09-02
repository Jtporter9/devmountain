angular.module('portfolioApp', ["firebase", "ui.router",'ngStorage'])

	.constant("fb", {
		url: "https://jtannerporter.firebaseio.com/"
	}) // end of constant
	
	.config(function ($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/welcome');

		$stateProvider
		.state('welcome', {
				url: '/welcome',
				templateUrl: 'js/welcome/welcome.html',
				controller: 'welcomeCtrl'
			})
			.state('home', {
				url: '/home',
				templateUrl: 'js/home/home.html',
				controller: 'homeCtrl'
			})

			.state('about', {
				url: '/about',
				templateUrl: 'js/about/about.html',
				controller: "aboutCtrl"
			})
			
			.state('myWork', {
				url: '/myWork',
				templateUrl: 'js/myWork/myWork.html',
				controller: "myWorkCtrl"
			})
			
			.state('contact', {
				url: '/contact',
				templateUrl: 'js/contact/contact.html',
				controller: "contactCtrl"
			})
			.state('admin', {
				url: '/admin',
				templateUrl: 'js/admin/admin.html',
				controller: "adminCtrl"
			});
	});
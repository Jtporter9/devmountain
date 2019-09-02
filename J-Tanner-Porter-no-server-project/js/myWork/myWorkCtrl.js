angular.module('portfolioApp')

    .controller('myWorkCtrl', function ($scope, mainService, $localStorage) {

        $scope.pageTitle = "My Portfolio"

        var homeRef = new Firebase('https://jtannerporter.firebaseio.com/home');

        $scope.buttonEnabled = true;

        $scope.showQuestion = true;
        $scope.showForm = false;

        $scope.leaveComment = function () {
            $scope.showForm = true;
            $scope.showQuestion = false;
        }

        // $scope.$watch('buttonEnabled', function () {
        // if ($scope.name && $scope.email && $scope.comment) {
        // 	$scope.buttonEnabled = false;
        // }
        // else {
        // 	$scope.buttonEnabled = true;
        // }
        // });
        //DIDN'T END UP USING THIS, JUST USE $INVALID SEE MYWORK VIEW.
        $scope.cancelComment = function () {
            $scope.name = "";
            $scope.email = "";
            $scope.comment = "";
            $scope.showQuestion = true;
            $scope.showForm = false;
        }
        $scope.submitComment = function () {
            var comment = {};
            comment.name = $scope.name;
            comment.email = $scope.email;
            comment.comment = $scope.comment;
            comment.answer = $scope.answer;
            if (!comment.answer) {
                $scope.error = "Please select Yes, or No, to the question above.";
            }
            else {
                mainService.submitComment(comment);
                $scope.showQuestion = true;
                $scope.showForm = false;
                $scope.name = "";
                $scope.email = "";
                $scope.comment = "";
            }
            $scope.getComments();
        };
        $scope.getComments = function () {
            $scope.comments = mainService.getComments();
        }
        $scope.getComments();
        // console.log($localStorage);
    });
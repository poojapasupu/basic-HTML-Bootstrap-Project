// Create your app with 'youtube-embed' dependency
var myApp = angular.module('myApp', ['youtube-embed']);

myApp.controller('MyCtrl', ['$scope', function ($scope) {
  // have a video id
  $scope.youTubeVideo = 'https://www.youtube.com/watch?v=6wk4dkY-rV0';
}]);

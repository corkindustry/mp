var app = angular.module('musicApp', []);

app.controller('musicCtrl', function($scope, $http) {
  $http.get("../music_json/2017music.json").then(function (response) {
    $scope.Data2017 = response.data;
  });
  $http.get("../music_json/2016music.json").then(function (response) {
    $scope.Data2016 = response.data;
  });
  $http.get("../music_json/2015music.json").then(function (response) {
    $scope.Data2015 = response.data;
  });
  $http.get("../music_json/2014music.json").then(function (response) {
    $scope.Data2014 = response.data;
  });
});
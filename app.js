var app = angular.module('musicApp', []);

app.controller('musicCtrl', function($scope, $http) {
  $http.get("../mconn.php").then(function (response) {
    $scope.Data = response.data;
  });
});

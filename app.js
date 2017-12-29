var app = angular.module('musicApp', []);

angular.module('tabsDemoDynamicHeight', ['ngMaterial']);

app.controller('musicCtrl', function($scope, $http) {
  $http.get("../mconn.php").then(function (response) {
    $scope.Data = response.data;
  });
});

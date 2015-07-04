angular.module('myApp.controllers', [])
  .controller('FrameController', ['$scope', function($scope) {
    $scope.today = new Date();
    $scope.name = "Dan";
  }])
   
  .controller('DashboardController', 
    ['$scope', '$parse', function($scope, $parse) {

    var date = new Date();
    $scope.dateFilters = {
      'all': 'all',
      'next week': new Date(date.setDate(date.getDate() + 7)),
      'tomorrow': chrono.parseDate('tomorrow at 11:59pm'),
      'today': chrono.parseDate('today at 11:59pm')
    };

    $scope.excludeByDate = function(input) {
      if ($scope.keepDate == 'all') {
        return true;
      } else {
        return new Date(input.start.dateTime).getTime() < $scope.keepDate.getTime();
      }
    }

    $scope.entryInput = undefined; 

    $scope.users = {
      "ari": {
        "twitter": "@auser"
      },
      "name": {
        "twitter": "@eigenjoy"
      }
    };

    $scope.$watch('entryInput', function(newVal, oldVal, scope) {
      if (newVal !== oldVal) {
        // newVal has latest version
        var strUsers = newVal.match(/[@]+[A-Za-z0-9)]+/g), 
            i;

        if (strUsers) {
          // Loop through users and parse $scope looking for user
          for (i = 0; i < strUsers.length; i++) {
            // Found user in the form @[user]
            var user = strUsers[i],
                cleanUser = user.slice(1),
                parsedUser = $parse('users.' + cleanUser)(scope);

            if (parsedUser) {
              // User found in scope in users object
            } else {
              // No user was found in scope
            }
          }
        }
      }
    }); 
  }]);
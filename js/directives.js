angular.module('myApp.directives', [])
  .directive('ourCalendar', function() {
    return {
      restrict: 'A',
      require: '^ngModel',
      scope: {
        ngModel: '='
      },
      template: '<table class="calendar"></table>'
    }
  });
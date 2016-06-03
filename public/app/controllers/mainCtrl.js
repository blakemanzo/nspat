angular.module('mainCtrl', [])
.controller('mainCtrl', function($mdDialog, $mdSidenav, $scope) {

    $scope.pageLoaded = true;

    $scope.toggleRight = function() {
        $mdSidenav('right').toggle();
    }

    $scope.modal = function(ev, name) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl: '/app/views/modal' + name + '.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true
        });        
    }

    function DialogController($scope, $mdDialog) {
      $scope.hide = function() {
        $mdDialog.hide();
      };
      $scope.cancel = function() {
        $mdDialog.cancel();
      };
      $scope.answer = function(answer) {
        $mdDialog.hide(answer);
      };
    }

})

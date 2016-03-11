app.components.controller('MenuCtrl', MenuController);
MenuController.inject = ['$scope', '$rootScope'];

function MenuController($scope, $rootScope) {
    init();

    function init() {
        console.log('Menu is initializing...');
        $scope.showMenu = true;
        $scope.menuClicked = false;
        if (!$rootScope.themeSelected) {
            $rootScope.themeSelected = 'green-theme';
        }
    }

    $scope.menuClick = function() {
        $scope.showMenu = !$scope.showMenu;
        $scope.menuClicked = !$scope.menuClicked;
    }
}

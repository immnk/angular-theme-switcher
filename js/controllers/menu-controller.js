app.components.controller('MenuCtrl', MenuController);
MenuController.inject = ['$scope'];

function MenuController($scope) {
    init();

    function init() {
        console.log('Menu is initializing...');
        $scope.showMenu = true;
        $scope.menuClicked = false;
    }

    $scope.menuClick = function() {
        $scope.showMenu = !$scope.showMenu;
        $scope.menuClicked = !$scope.menuClicked;
    }
}

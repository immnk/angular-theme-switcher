app.components
    .controller('DashboardCtrl', DashboardController);

DashboardController.inject = ['$scope', '$state', '$rootScope'];

function DashboardController($scope, $state, $rootScope) {
    init();

    function init() {
        console.log('Dashboard ctrl is initializing...');
        $scope.data = {};
        $scope.data.themeSelect = 'green-theme';
    }

    $scope.themeChanged = function() {
    	$rootScope.themeSelected = $scope.data.themeSelect;
    	console.debug($scope.data.themeSelect);
    }
}
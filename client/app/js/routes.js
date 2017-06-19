function AppRoutes($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider.when('/', {
        controller: 'ShotsController',
        controllerAs: 'shotsCtrl',
        templateUrl: '/app/views/shots-content.html'
    })
    .when('/:shotsId', {
        controller:  'ViewShotsController',
        templateUrl: '/app/views/shots.html'
    })
    .when('/shots/:typeShots', {
        controller:  'ShotsController',
        templateUrl: '/app/views/shots-content.html'
    })
    .when('/images/:typeImages', {
        controller:  'ShotsController',
        templateUrl: '/app/views/shots-content.html'
    })
    .when('/likes/:shotsId', {
        controller:  'ShotsController',
        templateUrl: '/app/views/shots-content.html'
    });

    $routeProvider.otherwise({redirectTo: '/'});
}

export default AppRoutes;
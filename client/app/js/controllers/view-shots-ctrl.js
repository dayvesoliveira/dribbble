ViewShotsController.$inject = ['$scope','$routeParams','ViewShotFactory'];

function ViewShotsController($scope, $routeParams, ViewShotFactory) {
    
    $scope.shot = [];
    
    if ( $routeParams.shotsId ) {
        ViewShotFactory.get($routeParams.shotsId)
                .then(( response )=>{
                    $scope.shot = response.data;
                    console.log('shot: ', JSON.stringify($scope.shot));
                })
                .catch((error)=>console.log(error));
    }

}

export default ViewShotsController;
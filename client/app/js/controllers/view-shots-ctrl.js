ViewShotsController.$inject = ['$scope','$routeParams','ViewShotFactory','ShotFactory'];

function ViewShotsController($scope, $routeParams, ViewShotFactory, ShotFactory) {
    
    $scope.shot = {};
    $scope.mensagem = "";
    
    if ( $routeParams.shotsId ) {
        ViewShotFactory.get($routeParams.shotsId)
                .then(( response )=>{
                    $scope.shot = response.data;
                    //console.log('shot: ', JSON.stringify($scope.shot));
                })
                .catch((error)=>console.log(error));
    }

    $scope.clickLikeShot = function( shot ) {
        
        var promise = ShotFactory.likeShot( shot );
        promise.then(( response )=>{
                        console.log('liked!');
                        $scope.mensagem = 'Like Ok!';
                    })
                    .catch((error)=>console.log(error));
    };


}

export default ViewShotsController;
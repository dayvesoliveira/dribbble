ShotsController.$inject = ['$scope','$routeParams','ShotFactory','MenuFactory'];

function ShotsController($scope, $routeParams, ShotFactory, MenuFactory) {
    var vm = this;
    $scope.shots       = [];
    
    $scope.sortShorts  = MenuFactory.getSort();
    $scope.widthShorts = MenuFactory.getWidthShots();
    
    // de acordo com o parametro informado altera o tamanho das imagens.
    $scope.largeImages = $routeParams.typeImages === 'large'? true:false;

    // de acordo com o parametro informado eh retornado uma promise
    // com o resultado da execucao.
    var promise;
    if ($routeParams.typeShots) {
        promise = ShotFactory.getTypeList( $routeParams.typeShots );
    } else {
        promise = ShotFactory.getList();
    }
    
    // armazenado o retorno.
    promise.then(( response )=>{
                    $scope.shots = response.data;
                    //console.log('response', $scope.shots);
                    //console.log(JSON.stringify('data',response.data[0]));
                })
                .catch((error)=>console.log(error));
}

export default ShotsController;
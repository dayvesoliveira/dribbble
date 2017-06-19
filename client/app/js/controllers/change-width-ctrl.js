ChangeWidthController.$inject = ['$scope','$routeParams'];

function ChangeWidthController($scope, $routeParams) {
    var vm = this;
    // de acordo com o parametro informado altera o tamanho das imagens.
    $scope.largeImages = $routeParams.typeImages === 'large'? true:false;
}

export default ChangeWidthController;
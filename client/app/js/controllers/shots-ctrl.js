ShotsController.$inject = ['$scope','$document','$routeParams','ShotFactory','MenuFactory', 'MenuItensFactory'];

function ShotsController($scope, $document, $routeParams, ShotFactory, 
        MenuFactory, MenuItensFactory) {
    
    var vm = this;
    vm.ishide   = true;
    vm.openMenu = openMenu;

    $scope.shots = [];
    $scope.menuItens = MenuItensFactory.getMenuItens();
    $scope.sortShorts = MenuFactory.getSort();
    $scope.widthShorts = MenuFactory.getWidthShots();

/*  $scope.shots       = [];
    $scope.menuItens   = MenuItensFactory.getMenuItens();
    $scope.sortShorts  = MenuFactory.getSort();
    $scope.widthShorts = MenuFactory.getWidthShots();*/
    
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
                })
                .catch((error)=>console.log(error));

    function openMenu() {
        vm.ishide = vm.ishide ? false : true;
        vm.myVar  = vm.ishide ? "":"nav-open";
        vm.classVisSearch = ( vm.ishide ? "":"shots-li visibleSearch" );

        var input = $document[0].getElementById('search-input');
        if ( input ) {
            var li  = $document[0].querySelectorAll('#nav-menu > li');
            var $input = angular.element( input );

            var display = $input.css('display'),
                vis     = (display !== 'block') ? true : false;

            $input.css({'display': vis ? 'block':'',
                        'position': vis ? 'relative':'absolute', 
                        'float': vis ? 'left' : 'right'});
            
            var parent = angular.element( input.parentNode );
            parent.css({'background': vis ? '#2f2f2f':'transparent'});

            var $li = angular.element(li);
            $li.css({'line-height': vis ? '10px':'1',
                     'float': vis ? 'left':'_'});
        }
    }
}

export default ShotsController;
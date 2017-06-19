
ShotsMenuController.$inject = ['$scope'];

function ShotsMenuController( $scope ) {
    
    $scope.menuItens = [
        {url:'/shots', name:'Popular'},
        {url:'/shots?sort=recent', name:'Recent'},
        {url:'/shots?list=debuts', name:'Debuts'},
        {url:'/shots?list=teams', name:'Teams'},
        {url:'/shots?list=playoffs', name:'Playoffs'}
    ];
    
    //console.log('menuItens',$scope.menuItens);
}

export default ShotsMenuController;

ShotsMenuHeaderController.$inject = ['$scope'];

function ShotsMenuHeaderController( $scope ) {
    
    $scope.menuItens = [
        {url:'/shots', name:'Popular'},
        {url:'/shots?sort=recent', name:'Recent'},
        {url:'/shots?list=debuts', name:'Debuts'},
        {url:'/shots?list=teams', name:'Teams'},
        {url:'/shots?list=playoffs', name:'Playoffs'}
    ];
    
}

export default ShotsMenuHeaderController;
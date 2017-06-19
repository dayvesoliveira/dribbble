
MenuNavController.$inject = ['$scope'];

function MenuNavController( $scope ) {
    var vm = this;
    vm.ishide = true;
    vm.clickButton = _clickButton;
    
    vm.menuItens = [
        {url:'/', name:'Popular'},
        {url:'/shots/recent', name:'Recent'},
        {url:'/shots/debuts', name:'Debuts'},
        {url:'/shots/teams', name:'Teams'},
        {url:'/shots/playoffs', name:'Playoffs'}
    ];
    
    function _clickButton() {
        vm.ishide = vm.ishide ? false : true;
        vm.myVar  = vm.ishide ? "":"nav-open";
    }
}

export default MenuNavController;
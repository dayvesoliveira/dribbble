import angular from 'angular';

MenuNavController.$inject = ['$scope','$document'];

function MenuNavController( $scope, $document ) {
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

export default MenuNavController;
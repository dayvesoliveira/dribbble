
function ButtonNavDirective() {
  return {
    restrict: 'AE',
    transclude: true,
    controllerAs: 'btnNavCtrl',
    templateUrl: '/app/views/directives/button-nav/button-nav-directive.html',
    replace: true,
    link: linkPost
  }

  function linkPost( $scope, $element, attr ){
        
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

export default ButtonNavDirective;
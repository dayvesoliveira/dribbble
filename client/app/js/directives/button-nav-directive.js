
function ButtonNavDirective() {
  return {
    restrict: 'AE',
    transclude: true,
    controllerAs: 'btnNavCtrl',
    templateUrl: '/app/views/directives/button-nav/button-nav-directive.html',
    replace: true
  }
}

export default ButtonNavDirective;
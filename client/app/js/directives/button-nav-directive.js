import MenuNavController from '../controllers/menu-nav-ctrl';

function ButtonNavDirective() {
  return {
    restrict: 'AE',
    transclude: true,
    controller: [MenuNavController],
    controllerAs: 'btnNavCtrl',
    templateUrl: '/app/views/directives/button-nav/button-nav-directive.html',
    replace: true
  }
}

export default ButtonNavDirective;
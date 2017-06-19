function ShotsToolBarDirective () {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: '/app/views/shots-content.html',
    replace: true
  }
}

export default ShotsToolBarDirective;
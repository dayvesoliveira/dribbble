function ShortsDirective () {
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      customer: '=data'
    },
    templateUrl: '/app/views/shorts-directive.html',
    replace: true
  }
}

export default ShortsDirective;
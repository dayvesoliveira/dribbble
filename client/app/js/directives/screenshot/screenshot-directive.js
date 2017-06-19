function ScreenshotDirective() {
  return {
    restrict: 'E',
    templateUrl: '/app/views/directives/screenshot/screenshot-directive.html',
    scope: {
      values: '='
    },
    transclude: true,
    replace: true
  }
}

export default ScreenshotDirective;
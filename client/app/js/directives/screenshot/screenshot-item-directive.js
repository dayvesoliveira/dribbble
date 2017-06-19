function ScreenshotItemDirective() {
  return {
    restrict: 'E',
    require: ['?^ScreenshotDirective'],
    templateUrl: '/app/views/directives/screenshot/screenshot-item-directive.html',
    transclude: true,
    replace: true
  }
}

export default ScreenshotItemDirective;
function ScreenshotToolsDirective() {
  return {
    restrict: 'E',
    scope:{
      htmlUrl:"@",
      likesCount:"@",
      bucketsCount:"@",
      viewsCount:"@"
    },
    templateUrl: '/app/views/directives/screenshot/screenshot-tools-directive.html'
  }
}

export default ScreenshotToolsDirective;
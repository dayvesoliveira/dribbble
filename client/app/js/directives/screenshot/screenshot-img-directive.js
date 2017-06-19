import angular from 'angular';

function ScreenshotImgDirective() {
  return {
    restrict: 'E',
    require: ['?^ScreenshotDirective','?^ScreenshotItemDirective'],
    scope:{
        title: '@',
        description: '@',
        image: '=',
        imageSmall: '@',
        imageLarge: '@',
        htmlUrl: '@url',
        time: '@',
        id:'@'
    },
    templateUrl: '/app/views/directives/screenshot/screenshot-img-directive.html',
    replace: true,
    link: linkPost
  }

  function linkPost( $scope, $element, attr ){

      var isLarge = (!$scope.largeImages ? false : true),
          targets = angular.element( $element )
                           .find('.dribbble-over .comment');
      
      $scope.image = isLarge ? $scope.imageLarge : $scope.image;
      
      if ( targets !== null && $scope.description !== null && $scope.description !== "" ) {
          targets.innerHTML = $scope.description;
      }
  }
}

export default ScreenshotImgDirective;
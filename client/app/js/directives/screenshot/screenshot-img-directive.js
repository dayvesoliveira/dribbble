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

      var isLarge  = !$scope.largeImages ? false : true;
      // console.log('isLarge: ', isLarge, '$element: ', $element);

      $scope.image = isLarge ? $scope.imageLarge : $scope.image;
      // console.log('$scope.image', $scope.image);

      var targets = angular.element( $element ).find('.dribbble-over .comment');
      if ( targets !== null && $scope.description !== null && $scope.description !== "" ) {
          targets.innerHTML = $scope.description;
          // console.log(targets, $scope.description);
      }
  }
}

export default ScreenshotImgDirective;
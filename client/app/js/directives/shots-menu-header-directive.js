function ShotsMenuHeaderDirective() {
    return {
      restrict: 'AE',
      transclude: true,
      replace: true,
      scope :{
        itens: '='
      },
      template: `<ul class="tabs">
                    <li ng-repeat="item in itens">
                        <a href="{{item.url}}">{{item.name}}</a>
                    </li>
                </ul>`
    }
}

export default ShotsMenuHeaderDirective;
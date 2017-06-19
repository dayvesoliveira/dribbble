describe('button-nav-ctrl', function () {
  console.log(1)
  beforeEach(module('AppDribble'));
console.log(2)
  var ctrl;

  beforeEach(inject(function ( $controller ) {
    ctrl = $controller('ButtonNavController');
  }));

  describe('teste toogle button-nav', function () {
    it('hide', function () {
      //ctrl.clickButton();
      //expect( ctrl.ishide ).toBe(true);
    });
  });

});
describe('shot-services', function () {
  
  beforeEach(module('AppDribble'));

  var factory;

  beforeEach(inject(function ( $services ) {
    factory = $services('ShotFactory');
    console.log(factory);
  }));

  describe('getShots', function () {
    
    it('hide', function () {
      var promise = factory.getShotMenu();
      var ok;
      promise.then(function(response){
         console.log('response:', response);
         ok = true;
      })
      .catch(function(error) {
        console.error(error);
        ok = false;
      });

      expect( ok ).toBe(true);


    });



  });

});
'use strict';

describe('Service: sexos', function () {

  // load the service's module
  beforeEach(module('videoClubApp'));

  // instantiate service
  var sexos;
  beforeEach(inject(function (_sexos_) {
    sexos = _sexos_;
  }));

  it('should do something', function () {
    expect(!!sexos).to.be.true;
  });

});

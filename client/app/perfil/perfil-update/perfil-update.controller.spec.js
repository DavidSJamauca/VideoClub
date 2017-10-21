'use strict';

describe('Component: PerfilUpdateComponent', function () {

  // load the controller's module
  beforeEach(module('videoClubApp'));

  var PerfilUpdateComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    PerfilUpdateComponent = $componentController('perfil-update', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});

describe('MainController controllers', () => {
  let vm;

  beforeEach(angular.mock.module('cardsUidemo'));

  beforeEach(inject(($controller) => {
    vm = $controller('MainController');
  }));

  it('should have a timestamp creation date', () => {
    expect(vm.creationDate).toEqual(jasmine.any(Number));
  });
});

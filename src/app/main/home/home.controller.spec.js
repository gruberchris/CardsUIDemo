describe('HomeController controllers', () => {
  let vm;

  beforeEach(angular.mock.module('cardsUidemo'));

  beforeEach(inject(($controller) => {
    vm = $controller('HomeController');
  }));

  it('todo', () => {
    expect(vm).toBeDefined();
  });
});

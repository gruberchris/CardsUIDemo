describe('AboutController controllers', () => {
  let vm;

  beforeEach(angular.mock.module('cardsUidemo'));

  beforeEach(inject(($controller) => {
    vm = $controller('AboutController');
  }));

  it('todo', () => {
    expect(vm).toBeDefined();
  });
});

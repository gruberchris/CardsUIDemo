export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('main', {
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'vm',
      abstract: true
    })
    .state('main.about', {
      url: '/about',
      templateUrl: 'app/main/about/about.html',
      controller: 'AboutController',
      controllerAs: 'vm'
    })
    .state('main.home', {
      url: '/home',
      templateUrl: 'app/main/home/home.html',
      controller: 'HomeController',
      controllerAs: 'vm'
    })
    .state('main.contact', {
      url: '/contact/:contactId',
      templateUrl: 'app/main/contact/contact.html',
      controller: 'ContactController',
      controllerAs: 'vm'
    });


  $urlRouterProvider
    .when('/', '/home')
    .otherwise('/');
}

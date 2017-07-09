angular
  .module('movieMania')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('movieMania', {
      abstract: true,
      templateUrl: 'app/movieMania/movieMania.html',
      controller: 'MovieManiaController',
      controllerAs: 'movieMania'
    })
    .state('movieMania.main', {
      url: '/',
      templateUrl: 'app/movieMania/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('movieMania.about', {
      url: '/about',
      templateUrl: 'app/movieMania/about/about.html',
      controller: 'AboutController',
      controllerAs: 'about'
    })
    ;
}

(function () {
  'use strict';

  angular
    .module('movieMania')
    .controller('MovieManiaController', MovieManiaController);

  /** @ngInject */
  function MovieManiaController ($state, $scope) {
    var vm = this;
    console.log('MovieManiaController');

    var container = document.getElementById('site-container');
    Ps.initialize(container);
  }
})();

(function () {
  'use strict';

  angular
    .module('movieMania')
    .controller('AboutController', AboutController);

  /** @ngInject */
  function AboutController ($state, $scope) {
    var vm = this;
    console.log('AboutController');
  }
})();

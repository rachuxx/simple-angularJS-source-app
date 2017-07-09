(function() {
  'use strict';

  angular
    .module('movieMania')
    .directive('sidebar', sidebar);

  /** @ngInject */
  function sidebar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/sidebar/sidebar.html',
      controller: SideBarController,
      controllerAs: 'sidebar',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function SideBarController($scope, $state) {
      var vm = this;
      console.log('SideBarController');
    }
  }
})();

(function() {
  'use strict';

  angular
    .module('movieMania')
    .directive('footerbar', footerbar);

  /** @ngInject */
  function footerbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/footerbar/footerbar.html',
      controller: FooterBarController,
      controllerAs: 'footerbar',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function FooterBarController($scope, $state) {
      var vm = this;
      console.log('FooterBarController');
    }
  }
})();

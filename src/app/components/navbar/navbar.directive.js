(function() {
  'use strict';

  angular
    .module('movieMania')
    .directive('navbar', navbar);

  /** @ngInject */
  function navbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      controller: NavbarController,
      controllerAs: 'navbar',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController($scope, $state) {
      var vm = this;

      // $('.open-btn').click(function() {
      //     $('.navbar__menu--mobile').css('display','block');
      //     $('.open-btn').css('display','none');
      //     $('.close-btn').css('display','block');
      //     $('body').css('overflow','hidden')
      // });
      // $('.close-btn, .navbar__logo, .mobile-list').click(function() {
      //     $('.navbar__menu--mobile').css('display','none');
      //     $('.open-btn').css('display','block');
      //     $('.close-btn').css('display','none');
      //     $('body').css('overflow','visible')
      // });
    }
  }
})();

(function () {
  'use strict';

  angular
    .module('movieMania')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController ($state, $scope) {
    var vm = this;
    console.log('MainController');
    vm.movies = [];
    var movie1 = {
      title: 'Lord of the Rings 3: Return of the King',
      image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMzRhYjNmM2YtNTU5MC00ZmQ3LThmOTEtNWE4MDM1MTRiOTUzXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY1000_CR0,0,700,1000_AL_.jpg',
      description: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring."
    };
    vm.movies.push(movie1);
  }
})();

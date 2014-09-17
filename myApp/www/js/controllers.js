angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('NewsCtrl', function($scope, News) {

  $scope.news = News.all();

  var $container = document.getElementById("container");
    var msnry =  new Masonry($container,{
        columnWidth: 100, 
        itemSelector:'.masonry-brick',
        gutter: 5, 
        transitionDuration: '.9s', 
        hiddenStyle: {
            opacity: .001,
            transform: 'scale(0.01)', 
            transform: 'rotate(200deg)'
        }, 
        visibleStyle: {
           opacity: 1, 
           transform: 'rotate(200deg)'
        }
    });
    
    /*    
    jQuery
    var $container = $('#container');

        $container.masonry({
          itemSelector : '.masonry-brick',
          columnWidth : 135
      });
      
      ref : http://jsfiddle.net/C2mCw/2/
  */
})

.controller('NewsDetailCtrl', function($scope, $stateParams, News) {
  $scope.new = News.get($stateParams.newsId);
});

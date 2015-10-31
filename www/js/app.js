// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('rentit', ['ionic','rentit.controllers','rentit.services'])

.run(function($ionicPlatform,$state) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    $state.go('items');
  });
}).config(function($stateProvider){
        $stateProvider.state('items',{
           url:'/items',
           controller:'ItemListController',
           templateUrl:'views/items.html'
        }).state('createItem',{
            url:'/item/new',
            controller:'ItemCreationController',
            templateUrl:'views/create-item.html'
        }).state('editItem',{
            controller:'ItemEditController',
            url:'/item/edit/:id/:content',
            templateUrl:'views/edit-item.html'
        })
        .state('viewItem',{
            url:'/item/view/:id/:content',
            controller:'ItemViewController',
            templateUrl:'views/view-item.html'
        });
});

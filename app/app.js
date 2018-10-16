'use strict';
// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.version'
]).run(function ($rootScope) {
  if (localStorage.getItem('books') == null) {
    localStorage.setItem('books', JSON.stringify({
      0: {
        url: 'https://picsum.photos/160/181',
        type: 'Currently Reading',
      },
      1: {
        url: 'https://picsum.photos/161/180',
        type: 'Want To Read',
      },
      2: {
        url: 'https://picsum.photos/160/182',
        type: 'Read'
      },
      3: {
        url: 'https://picsum.photos/162/180',
        type: 'Currently Reading',
      },
      4: {
        url: 'https://picsum.photos/160/179',
        type: 'Currently Reading',
      },
      5: {
        url: 'https://picsum.photos/161/185',
        type: 'Want To Read',
      },
      6: {
        url: 'https://picsum.photos/158/182',
        type: 'Read'
      },
      7: {
        url: 'https://picsum.photos/159/180',
        type: 'Currently Reading',
      }
    }));

    localStorage.setItem('allBooks', JSON.stringify({
      0: {
        url: 'https://picsum.photos/170/181',
        type: 'Currently Reading',
      },
      1: {
        url: 'https://picsum.photos/155/180',
        type: 'Want To Read',
      },
      2: {
        url: 'https://picsum.photos/160/172',
        type: 'Read'
      },
      3: {
        url: 'https://picsum.photos/162/189',
        type: 'Currently Reading',
      },
      4: {
        url: 'https://picsum.photos/160/173',
        type: 'Currently Reading',
      },
      5: {
        url: 'https://picsum.photos/161/183',
        type: 'Want To Read',
      },
      6: {
        url: 'https://picsum.photos/166/182',
        type: 'Read'
      },
      7: {
        url: 'https://picsum.photos/170/180',
        type: 'Currently Reading',
      }
    }));
  }
}).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {

  $routeProvider
    .when('/gallery', {
      controller: 'GalleryCtrl',
      templateUrl: 'gallery/gallery.html'
    })
    .when('/search', {
      controller: 'SearchCtrl',
      templateUrl: 'search/search.html'
    })
    .otherwise({
      redirectTo: '/gallery'
    });

}]);
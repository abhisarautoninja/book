'use strict';

angular
    .module('myApp')
    .controller('GalleryCtrl', [
        '$location', '$scope',
        function ($location, $scope) {
            var vm = $scope;
            activate();

            function activate(){
                vm.books = JSON.parse(localStorage.getItem('books'));
                vm.books =  Object.values(JSON.parse(localStorage.getItem('books'))).reduce(function(rv, x) {
                    if(x!= null && x['type'] && rv[x['type']]){
                        rv[x['type']].push(x);
                    }else if(x!= null && x['type']){
                        rv[x['type']] = [];
                        rv[x['type']].push(x);
                    }
                    return rv;
                  }, {});
            }

            vm.reorder = function (index,pre,post){
                vm.books[pre][index].type = post;
                var x = vm.books[pre][index];
                vm.books[post].push(x);
                delete vm.books[pre][index];
                var y = [];
                vm.books['Currently Reading'].map(function(item){
                    y.push(item);
                })
                vm.books['Want To Read'].map(function(item){
                    y.push(item);
                })
                vm.books['Read'].map(function(item){
                    y.push(item);
                })
                localStorage.setItem('books',JSON.stringify(y));
                activate();
            }
            vm.changeRoute = function (){
                $location.path('/search');
            }
            vm.$on(
                "$destroy",
                function handleDestroyEvent() {

                }
            );

        }
    ]);
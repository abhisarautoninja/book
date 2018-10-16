'use strict';

angular
    .module('myApp')
    .controller('SearchCtrl', [
        '$location', '$scope',
        function ($location, $scope) {
            var vm = $scope;
            vm.searchText = '';
            vm.allBooks = JSON.parse(localStorage.getItem('allBooks'));
            vm.books = JSON.parse(localStorage.getItem('books'));
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

            vm.change = function(){
                vm.allBooks = JSON.parse(localStorage.getItem('allBooks'));
                if(vm.searchText === '') {
                    return;
                }else {
                    vm.allBooks = Object.keys(vm.allBooks).filter(function(item){
                        if(vm.allBooks[item].type.toLowerCase().indexOf(vm.searchText.toLowerCase()) >= 0) return 1;
                        else return 0;
                    });
                }
            }
            
            vm.add = function(index,category){
                vm.allBooks[index].type = category;
                vm.books[category].push(vm.allBooks[index]);
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
                delete vm.allBooks[index];
                localStorage.setItem('books',JSON.stringify(y));
                localStorage.setItem('allBooks',JSON.stringify(vm.allBooks));
            }
            vm.changeRoute = function (path) {
                $location.path(path);
            }
            vm.$on(
                "$destroy",
                function handleDestroyEvent() {

                }
            );
        }
    ]);
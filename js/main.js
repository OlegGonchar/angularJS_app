(function(){
    'use strict'
    let items = [];
    if (localStorage.getItem('comrades')){
        items = JSON.parse(localStorage.getItem('comrades'));
    };
    
    angular.module('app', ['ui.router'])
    .service('AddFriends', AddFriends)
    .service('WeatherService', WeatherService)
    .constant('MenuUrl','https://api.openweathermap.org/data/2.5/weather');

    WeatherService.$inject = ['$http', 'MenuUrl']
    function WeatherService($http, MenuUrl){
        let service = this;

        service.getWeather = function(name){
            let response = $http({
                method: 'GET',
                url: MenuUrl,
                params: {
                    q: name ,
                    appid: 'c7e6c62b4a5e28def0a9f11981b26bd0'
                }
            });
            return response;
        }

    }

    function AddFriends(){
        let service = this;
        let editedItem =[];
            service.addItem = function(itemName, itemPhone){
                if (itemName||itemPhone){
                    let item = {
                        name: itemName,
                        phone: itemPhone
                    };
                    items.push(item);
                    localStorage.setItem('comrades', JSON.stringify(items));
                }
            }

            service.removeItem = function(itemIndex){
                items.splice(itemIndex, 1);
                localStorage.setItem('comrades', JSON.stringify(items));
            }

            service.editItem = function(itemIndex){
                editedItem = [items[itemIndex].name, items[itemIndex].phone, itemIndex];
                localStorage.setItem('comrades', JSON.stringify(items));
            }

            service.addEdited = function(itemName, itemPhone){
                items[editedItem[2]] = {
                    name: itemName,
                    phone: itemPhone
                }
                localStorage.setItem('comrades', JSON.stringify(items));
                editedItem.length = 0;
            }
            service.cancelEdit = function(){
                editedItem.length = 0;
            }

            service.getEdited = function(){
                return editedItem;
            }

            service.getItems = function(){
                return items;
            }
    }

})()
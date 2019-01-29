(function(){
    'use strict'
    angular.module('app')
    .controller('WeatherControllerLondon', WeatherControllerLondon)
    .controller('WeatherControllerChernihiv', WeatherControllerChernihiv);

    WeatherControllerLondon.$inject = ['WeatherService'];
    function WeatherControllerLondon(WeatherService){
        let weather = this;       
        let promise = WeatherService.getWeather('London,uk');

            promise.then(function(response){
                weather.object = response.data;
                weather.pic = response.data.weather[0].icon;
                weather.temp = +weather.object.main.temp - 273 ;
            })
            .catch(function(err){
                console.log(err)
            })
    }
    WeatherControllerChernihiv.$inject = ['WeatherService'];
    function WeatherControllerChernihiv(WeatherService){
        let weather = this;       
        let promise = WeatherService.getWeather('Chernihiv,ua');

            promise.then(function(response){
                weather.object = response.data;
                weather.pic = response.data.weather[0].icon;
                weather.temp = +weather.object.main.temp - 273;
            })
            .catch(function(err){
                console.log(err)
            })
    }
})()
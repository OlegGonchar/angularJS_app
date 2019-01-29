(function(){
    'use strict'
    angular.module('app')
    .controller('FormInput', FormInput);

    FormInput.$inject = ['AddFriends'];
    function FormInput(AddFriends) {
        let itemAdder = this;

            itemAdder.itemName ='';
            itemAdder.itemPhone ='';

            itemAdder.addItem = function(){
                AddFriends.addItem(itemAdder.itemName, itemAdder.itemPhone);
            }
    }
    
})()
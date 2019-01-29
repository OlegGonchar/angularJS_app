(function(){
    'use strict'
    angular.module('app')
    .controller('FriendsListEdit', FriendsListEdit);

    FriendsListEdit.$inject = ['AddFriends'];
    function FriendsListEdit(AddFriends) {
        let edit = this;
        edit.item = AddFriends.getEdited();
        edit.addItem = function(){
            AddFriends.addEdited(edit.item[0], edit.item[1]);
        }
        edit.cancel = function(){
            AddFriends.cancelEdit();
        }

    }

    
})()
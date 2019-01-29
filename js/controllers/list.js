(function(){
    'use strict'
    angular.module('app')
    .controller('FriendsList', FriendsList);
  
    FriendsList.$inject = ['AddFriends'];
    function FriendsList(AddFriends) {
        let friendList = this;
            friendList.items = AddFriends.getItems();
            friendList.removeItem = function(itemIndex){
                AddFriends.removeItem(itemIndex);
            };
            friendList.editItem = function(itemIndex){
                AddFriends.editItem(itemIndex);
            };
    }
})()